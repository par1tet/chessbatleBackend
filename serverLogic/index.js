import express from 'express';
import { board } from '../chessLogic/chess.js'

const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server has been started. Port is ${PORT}`)
})

app.get('/get_field', (req,res) => {
    res.send({
        "field": board.getField()
    })
})