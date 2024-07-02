import { Board } from './board.js'
import { allPieces } from './pieces.js'

class chessAPI{
    // whiteboard microsoft
    // https://wbd.ms/share/v2/aHR0cHM6Ly93aGl0ZWJvYXJkLm1pY3Jvc29mdC5jb20vYXBpL3YxLjAvd2hpdGVib2FyZHMvcmVkZWVtLzhkNDJkMjdhZjUzMTQyNDVhMWM2MjE5NmNiOTA4YjI1X0JCQTcxNzYyLTEyRTAtNDJFMS1CMzI0LTVCMTMxRjQyNEUzRF83YjMwNWQ1Yi1kYzFmLTRlODctODE1NS01N2ZmY2U2NTY2NmI=
    
    // Класс chessAPI, который является главным для работы с API

    constructor(board,whoismove,context){
        this.board = board
        this.whoismove = whoismove
        this.context = context
    }

    makeMove(board = Board, coordsOut,coordsIn, notationName, isMoving = 'white') {// Данный метод реализует главную функцию, отвечающию за ход
        let toCanMove = board.moveOfPieceAllInfo(coordsIn, coordsOut, notationName, isMoving)
        // console.log(toCanMove)
        // console.log(board.getField())
        return toCanMove
    }

    itsCheck(coordsOut){
        return this.board.itsCheck(coordsOut)
    }

    getAllPossibleMovesOfPiece(coordsOut){
        return board.getAllPossibleMovesOfPiece(coordsOut, this.whoismove)
    }

    itsCheckMate(side,field){
        let itsCheckMate = true
        // console.log(side)
        field.forEach((row, indexRow) => {
            row.forEach((cell, indexColumn) => {
                if (cell === '  ') return 0
                if (cell[1] !== side[0]) return 0
                // console.log(cell)
                // console.log(allPieces[(cell[0])]);
                // console.log((this.getAllPossibleMovesOfPiece([indexRow,indexColumn])).length)
                if ((this.getAllPossibleMovesOfPiece([indexRow,indexColumn])).length !== 0){
                    itsCheckMate = false
                }
            })
        })
        return itsCheckMate
    }
}

const field = [
    ['Rb','Nb','Bb','Qb','Kb','Bb','Nb','Rb',],
    ['pb','pb','pb','pb','pb','pb','pb','pb',],
    ['  ','  ','  ','  ','  ','  ','  ','  ',],
    ['  ','  ','  ','  ','  ','  ','  ','  ',],
    ['  ','  ','  ','  ','  ','  ','  ','  ',],
    ['  ','  ','  ','  ','  ','  ','  ','  ',],
    ['pw','pw','pw','pw','pw','pw','pw','pw',],
    ['Rw','Nw','Bw','Qw','Kw','Bw','Nw','Rw',],
]// Создаем поле для доски // Стартовая доска

export const board = new Board(field)// Создаем доску
export const chessAPIMain = new chessAPI(board, 'white', {"checked":{}})// Создаем главный API

// chessAPIMain.makeMove(board, 'Re5', 'black')// Делаем ход