import express from 'express'
import { docxToHtml } from '../docxtohtml/docxToHtmlHandler.js'
const router = express.Router()
import multer from 'multer'
const upload = multer()

router.post('/', upload.single('file'), async (req, res) => {
    const {api_key} = req?.query
    const file = req?.file
    const html = await docxToHtml(file?.buffer)
    res.send({data: html})
})

export default router