import express from 'express'

const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server has been started. Port is ${PORT}`)
})

app.get('/', (req,res) => {
    res.send("hello world")
})