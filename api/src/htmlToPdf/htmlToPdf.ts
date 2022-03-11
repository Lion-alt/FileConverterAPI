// This module generates and downloades the uncertified pdfs as zip
import type { ReadStream as ReadStreamType } from "fs";
import { create } from "html-pdf";
import { configureOptionsForPdf } from "./configureOptonsForPdf.js";
/**
 * Activity diagram
 * http://www.plantuml.com/plantuml/uml/JOuzQWCn48NxFSNKov83n8r9boQOGEemNZr52hDQCHhPEAUFf43iHeZtyxqv5cErkWbz8K7Py95Mg4KVuKxEbsa4fcTwHnPUGGjvtJVoKP1u0rsZ1VeyjCIfba0My8zob9rl2Xl5yg0EGB0soidrng2zTLfCjZULM9LlnAN_z_CtLkiBhvvOX5wgzz3cwSFMCa3rVlsm2_h2FhnL8f9rw4_CnDwWNRzHu0le3BJPd5i1ey8zjj0rG37wZesfgfG_ikqAzpGLNA0iDCyI4yey7wQ6c8xjgPly0W00
 *
 * @param {Array<string>} fileNames array of fileNames from pdfs.
 * @param {Array<string>} htmlTemplateArray array of html-strings, that are converted to pdfs.
 * @param {CreateOptionType} htmlToPDfOptions  options for converting html to pdf.
 * @param {Express.Response} res the response object
 */
export const generatePdfFromHtml: Function = async (
  html: string,
  res: Express.Response | any
): Promise<void> => {
  create(html, configureOptionsForPdf()).toStream(
    (err: unknown, result: ReadStreamType) => {
      result.pipe(res);
    }
  );
};
