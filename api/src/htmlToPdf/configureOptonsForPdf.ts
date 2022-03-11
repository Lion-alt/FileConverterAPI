// This module sets the configuration of the pdf
import type { CreateOptions as CreateOptionsType } from "html-pdf";

/**
 * @swagger
 * @return CreateOptions (Type from html-pdf)
 *
 **/
export const configureOptionsForPdf = (): CreateOptionsType => {
  return {
    type: "pdf",
    format: "A4",
    orientation: "portrait",
    quality: "100",
    renderDelay: 0
  };
};