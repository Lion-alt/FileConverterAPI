import express from 'express'
import multer from 'multer'
import cors from 'cors'
import routerFromDocxToHtml from './routes/docxToHtml.js'
import routerFromHtmlToPdf from './routes/htmlToPdf.js'
import routerFromDocxToPdf from './routes/docxToPdf.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: '*'})) // ! Implement security with cors
app.use(multer)

app.use('/docxToHtml', routerFromDocxToHtml)
app.use('/htmlToPdf', routerFromHtmlToPdf)
app.use('/docxToPdf', routerFromDocxToPdf)


export default app