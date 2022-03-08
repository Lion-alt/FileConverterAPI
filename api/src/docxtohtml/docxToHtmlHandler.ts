import { logDoneMessage } from "../utils/logger/logger";



export const docxToHtml = async (docxBuffer: any) => {
    let html = ''
    const mammoth = await import("mammoth");

    mammoth.convertToHtml({ arrayBuffer: docxBuffer.values })
        .then(function (result) {
            html = result.value; // The generated HTML
        }).finally(logDoneMessage)
    return html

}
