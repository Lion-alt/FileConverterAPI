import mammoth from 'mammoth'

export const docxToHtml = async (docxBuffer: Buffer | undefined, res: any) => {
    if(docxBuffer == undefined) return
    try {
        console.log(docxBuffer)
        const result =  await mammoth.convertToHtml({buffer: docxBuffer})
        console.log(result.value)
        return result.value
    } catch (err) {
        res.status(500).send({data: (err as {message: string}).message })
    }

}
