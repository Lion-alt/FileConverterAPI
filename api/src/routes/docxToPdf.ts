import express from "express";
import multer from "multer";
import { docxToHtml } from "../docxtohtml/docxToHtmlHandler.js";
import { generatePdfFromHtml } from "../htmlToPdf/htmlToPdf.js";
const router = express.Router();
const upload = multer()

router.post("/", upload.single('file'), async (req, res) => {
  const {api_key} = req?.query
  const docxBuffer: any = req?.file
  const buffer = Buffer.from(await docxBuffer.buffer, "binary")
  console.log(buffer)
  const html = await docxToHtml(buffer)
  console.log(html)
  generatePdfFromHtml(html, res);
});

export default router;
