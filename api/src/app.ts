import express from "express";
import multer from "multer";
import cors from "cors";
import routerFromDocxToHtml from "./routes/docxToHtml.js";
import routerFromHtmlToPdf from "./routes/htmlToPdf.js";
import routerFromDocxToPdf from "./routes/docxToPdf.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const generateFileConverterAPIToken = (apiKey: string) => `http`;

const defaultRouter = express.Router().get("/", (req, res) => {
  res.send("<p>File Converter API </p>");
});

app.use("/docxToHtml", routerFromDocxToHtml);
app.use("/htmlToPdf", routerFromHtmlToPdf);
app.use("/docxToPdf", routerFromDocxToPdf);
app.use("/", defaultRouter);

export default app;
