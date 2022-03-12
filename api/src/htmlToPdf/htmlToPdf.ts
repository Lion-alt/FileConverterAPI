// This module generates and downloades the uncertified pdfs as zip
import type { ReadStream as ReadStreamType } from "fs";
import { create } from "html-pdf";
import { configureOptionsForPdf } from "./configureOptonsForPdf.js";
/**
 * @param {Array<string>} fileNames array of fileNames from pdfs.
 * @param {Array<string>} htmlTemplateArray array of html-strings, that are converted to pdfs.
 * @param {CreateOptionType} htmlToPDfOptions  options for converting html to pdf.
 * @param {Express.Response} res the response object
 */
export const generatePdfFromHtml: Function = async (
  html: string,
  res: Express.Response | any
): Promise<void> => {
  if(html == undefined || html === "") {
    res.sendStatus(500);
    return
  } 
  try {
      create(html ? html : '', configureOptionsForPdf()).toStream(
    (err: unknown, result: ReadStreamType) => {
      if(err) {
        res.status(500).send({data: (err as {message: string}).message});
      }
      result.pipe(res);
    }
  );
  } catch (err) {
    res.status(500).send({data: err })
  }

};
