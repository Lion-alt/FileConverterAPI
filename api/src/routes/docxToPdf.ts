import express from "express";
import multer from "multer";
import { docxToHtml } from "../docxtohtml/docxToHtmlHandler.js";
import { generatePdfFromHtml } from "../htmlToPdf/htmlToPdf.js";
const router = express.Router();
const upload = multer()

router.post("/", upload.single('file'), async (req, res) => {
  const docxBuffer: any = req?.body?.file
  try {
    const buffer = Buffer.from(await docxBuffer, "base64")
    const html = await docxToHtml(buffer, res)
    generatePdfFromHtml(html, res);
  }
  catch (err) {
    console.error(err)

    res.status(500).send({data: err})
  }

});

export default router;
