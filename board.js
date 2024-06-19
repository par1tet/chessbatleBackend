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

        return pieceMove
    }
}

module.exports = Board;