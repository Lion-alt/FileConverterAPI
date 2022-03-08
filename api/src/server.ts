import app from './app'

(async () => {
    app.listen(process.env.PORT || 8081, () => console.log(`Server is listening on port ${process.env.PORT || 8081}.`))
})()