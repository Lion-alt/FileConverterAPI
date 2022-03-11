import express from "express";
import multer from "multer";
import { docxToHtml } from "../docxtohtml/docxToHtmlHandler.js";
import { generatePdfFromHtml } from "../htmlToPdf/htmlToPdf.js";
import {readFile} from 'node:fs/promises'
const router = express.Router();

router.post("/", multer().single("docxFile"), async (req, res) => {
/*   if (req?.files == undefined) {
    res.sendStatus(400);
    return;
  } */
  console.log('here')
  const docxBuffer = req?.file ?? (await readFile('mydocx.docx')).buffer ;
  generatePdfFromHtml(await docxToHtml(docxBuffer), res);
});

export default router
