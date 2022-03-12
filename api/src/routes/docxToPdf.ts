import express from "express";
import multer from "multer";
import { docxToHtml } from "../docxtohtml/docxToHtmlHandler.js";
import { generatePdfFromHtml } from "../htmlToPdf/htmlToPdf.js";
const router = express.Router();
const upload = multer()

router.post("/", upload.single('file'), async (req, res) => {
  const docxBuffer: any = req?.file
  try {
    const buffer = Buffer.from(await docxBuffer.buffer, "binary")
    const html = await docxToHtml(buffer)
    console.log(html)
    generatePdfFromHtml(html, res);
  }
  catch (err) {
    res.status(500).send(err)
  }

});

export default router;
