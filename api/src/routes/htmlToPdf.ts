import express from "express";
import { generatePdfFromHtml } from "../htmlToPdf/htmlToPdf.js";
const router = express.Router();

router.post("/", async(req, res) => {
  const {api_key} = req?.query
  if (req?.body?.html == undefined) {
    res.send(400);
    return;
  }
  const html = req?.body?.html
  try {
    generatePdfFromHtml(html, res);
  } catch (err) {
    res.status(500).send({ data: err });
  }
});

export default router;
