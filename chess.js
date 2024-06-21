const Board = require('./board')

class chessAPI{
    // Рекомундется ознокомиться с whiteboard microsoft
    //https://wbd.ms/share/v2/aHR0cHM6Ly93aGl0ZWJvYXJkLm1pY3Jvc29mdC5jb20vYXBpL3YxLjAvd2hpdGVib2FyZHMvcmVkZWVtLzhkNDJkMjdhZjUzMTQyNDVhMWM2MjE5NmNiOTA4YjI1X0JCQTcxNzYyLTEyRTAtNDJFMS1CMzI0LTVCMTMxRjQyNEUzRF83YjMwNWQ1Yi1kYzFmLTRlODctODE1NS01N2ZmY2U2NTY2NmI=
    
    // Класс chessAPI, который является главным для работы с API

    makeMove(board = Board, move, coordsIn, isMoving = 'white') {// Данный метод реализует главную функцию, отвечающию за ход
        let objectMove = board.parametresOfMove(move, coordsIn, isMoving)
        console.log(objectMove)
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
]// Создаем поле для доски
const board = new Board(field)// Создаем доску
const chessAPIMain = new chessAPI()// Создаем главный API

chessAPIMain.makeMove(board, 'Re4', [2,7], 'black')// Делаем ход