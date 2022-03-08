import express from 'express'
import { docxToHtml } from '../docxtohtml/docxToHtmlHandler'
const router = express.Router()
import multer from 'multer'
const upload = multer()

router.post('/', upload.single('file'), async (req, res) => {
    const file = req?.files
    const html = await docxToHtml(file)
})

export default router