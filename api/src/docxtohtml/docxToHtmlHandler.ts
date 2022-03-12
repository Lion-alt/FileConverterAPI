
export const docxToHtml = async (docxBuffer: any) => {
    const mammoth = await import("mammoth");
    const result = await mammoth.convertToHtml({buffer: docxBuffer});
    return result.value;
}
