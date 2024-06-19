const allPieces = require('./pieces.js')

class Board{// Данный класс реализует доску
    field;
    
    constructor(field){
        this.field = field;
    }

    getField(){
        return this.field;
    }

    setField(value){
        if (Array.isArray(value)){
            this.field = value;
        }else{
            const IncorrectField = new Error("It's field incorrect")
            throw IncorrectField
        }
    }

    parametresOfMove(move, isMoving = 'white'){
        // Данная функция разделяет ход из шахматной нотации, на обьект js который позволяет сделать ход
        let pieceMove = '' // Какая фигура ходит

        // Код проверяющий на то какая фигура ходит
        allPieces.forEach(Piece => {
            let currentPiece = new Piece()
            if (move[0] === currentPiece.notationName){
                pieceMove = currentPiece.notationName;
            }
        })
        if(pieceMove === ''){
            pieceMove = 'p'
        }
        pieceMove += isMoving[0]
        // ----------------------

        let cellMove = ''// Клетка куда ходит фигура
        let advancedInformation = ''// Дополнительная информация о ходе

        // Код который говорит на какую клетку ход

        if ((''+(+(move[2])) === 'NaN')){
            // Не обращайте внимание на такое страшное условие, но он работает
            advancedInformation += move[1]
            cellMove += move[2]
            cellMove += move[3]
        }else{
            cellMove += move[1]
            cellMove += move[2]
        }

        // ----------------------

        // Выяснение фигуры которая ходит

        let candidateMovePieces = []

        this.field.forEach((cellRow, xCoord) => {
            cellRow.forEach((cell, yCoord) => {
                if (cell === pieceMove){
                    candidateMovePieces.push({
                        "gameCoodsX":Math.abs((xCoord - 8)),
                        "gameCoodsY":(yCoord + 1),
                        "arrayCoordsX":xCoord,
                        "arrayCoordsY":yCoord
                    })
                }
            })
        })

        // ----------------------

        // Выеснение какая именно фигура ходит

        if (candidateMovePieces.length === 0){
            
        }

        let objectMove = {
            'piece': pieceMove,
            'cell': cellMove,
            'advancedInformation': advancedInformation,
            'candidateMovePieces': candidateMovePieces
        }

        return objectMove
    }
}

module.exports = Board;