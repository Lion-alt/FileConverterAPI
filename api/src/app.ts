import express from 'express'
import multer from 'multer'
import cors from 'cors'
import routerFromDocxToHtml from './routes/docxToHtml'
import routerFromExcelReading from './routes/readExcelFile'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors()) // ! Implement security with cors
app.use(multer)

app.use('/docxToHtml', routerFromDocxToHtml)
app.use('/readExcelFile', routerFromExcelReading)


export default app