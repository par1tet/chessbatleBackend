class Piece{
    notationName;

    constructor(notationName){
        this.notationName = notationName
    }

    toCanMoves = [(field,coordsOut,coordsIn) => {
        return true;
    }]

    isFreidlyFire(field,coordsOut,coordsIn){
        if (field[coordsOut[0]][coordsOut[1]][1] === field[coordsIn[0]][coordsIn[1]][1]){
            return true
        }
        return false
    }

    getAllPossibleMoves(field, coordsOut, whoismoving){
        const allPossibleMoves = []
        field.forEach((row,indexRow) => {
            row.forEach((cell,indexColumn) => {
                this.toCanMoves.forEach(toCanMove => {
                    if(toCanMove(field, coordsOut, [indexRow,indexColumn], whoismoving)){
                        allPossibleMoves.push([indexRow,indexColumn])
                    }
                })
            })
        });
        return allPossibleMoves
    }
}

class Pawn extends Piece{// Пешка
    constructor(){
        super('p')
    }

    toCanMoves = [(field, coordsOut, coordsIn, isMoving) => {
        // console.log((coordsIn[0] === coordsOut[0]))
        // console.log((coordsIn[1] === coordsOut[1]))
        // console.log(coordsOut[1])
        // console.log(coordsIn[1])

        // console.log(coordsOut[0])
        // console.log(coordsIn[0])

        // console.log(coordsOut)
        // console.log(coordsIn)

        if (this.isFreidlyFire(field,coordsOut,coordsIn)){
            return false
        }

        let doMove = (field, coordsOut, coordsIn) => {
            field[coordsIn[0]][coordsIn[1]] = field[coordsOut[0]][coordsOut[1]]
            field[coordsOut[0]][coordsOut[1]] = '  '

            return field
        }

        if (isMoving === 'white'){
            if (coordsOut[1] - coordsIn[1] === 0){
                // console.log(coordsOut)
                // console.log(coordsIn)
                if (field[coordsIn[0]][coordsIn[1]] !== '  '){
                    return false
                }
                if (coordsOut[0] === 6){
                    if ((coordsOut[0] - coordsIn[0] === 2 || coordsOut[0] - coordsIn[0] === 1) && coordsIn[1] - coordsOut[1] === 0){
                        return doMove
                    }
                }else{
                    if ((coordsOut[0] - coordsIn[0] === 1) && coordsIn[1] - coordsOut[1] === 0){
                        return doMove
                    }
                }
                return false
            }else{
                // console.log(coordsOut)
                // console.log(coordsIn)
                if(coordsOut[0] - coordsIn[0] === 1 && coordsOut[1] - coordsIn[1] === 1){
                    if (field[coordsIn[0]][coordsIn[1]] !== '  '){
                        return doMove
                    }
                }else if(coordsOut[0] - coordsIn[0] === 1 && coordsOut[1] - coordsIn[1] === -1){
                    if (field[coordsIn[0]][coordsIn[1]] !== '  '){
                        return doMove
                    }
                }
                return false
            }
        }else{
            if (coordsOut[1] - coordsIn[1] === 0){
                if (field[coordsIn[0]][coordsIn[1]] !== '  '){
                    return false
                }
                if (coordsOut[0] === 1){
                    if ((coordsOut[0] - coordsIn[0] === -2 || coordsOut[0] - coordsIn[0] === -1) && coordsIn[1] - coordsOut[1] === 0){
                        return doMove
                    }
                }else{
                    if ((coordsOut[0] - coordsIn[0] === -1) && coordsIn[1] - coordsOut[1] === 0){
                        return doMove
                    }
                }
                return false
            }else{
                if(coordsOut[0] - coordsIn[0] === 1 && coordsOut[1] - coordsIn[1] === -1){
                    if (field[coordsIn[0]][coordsIn[1]] !== '  '){
                        return doMove
                    }
                }else if(coordsOut[0] - coordsIn[0] === -1 && coordsOut[1] - coordsIn[1] === 1){
                    if (field[coordsIn[0]][coordsIn[1]] !== '  '){
                        return doMove
                    }
                }
                return false
            }
        }
    }]
}

class Knight extends Piece{// Конь
    constructor(){
        super('N')
    }

    toCanMoves = [(field, coordsOut,coordsIn) => {
        // console.log((coordsIn[0] === coordsOut[0]))
        // console.log((coordsIn[1] === coordsOut[1]))
        // console.log(coordsOut[1])
        // console.log(coordsIn[1])

        // console.log(coordsOut[0])
        // console.log(coordsIn[0])

        // console.log(coordsOut)
        // console.log(coordsIn)

        let doMove = (field, coordsOut, coordsIn) => {
            let tempField = []

            for (let i = 0;i < field.length;i++){
                tempField.push([...field[i]])
            }

            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
            tempField[coordsOut[0]][coordsOut[1]] = '  '

            return tempField
        }

        if (this.isFreidlyFire(field,coordsOut,coordsIn)){
            return false
        }

        // All possible moves a knight can make from a given position

        // Следуищий код написал чатGPT, сработал он ток со второго промта

        // Extract the starting and ending coordinates
        const [x1, y1] = coordsOut;
        const [x2, y2] = coordsIn;

        // All possible moves a knight can make from a given position
        const knightMoves = [
            [2, 1], [1, 2], [-1, 2], [-2, 1],
            [-2, -1], [-1, -2], [1, -2], [2, -1]
        ];

        // Check if the target position is a valid knight move
        for (let move of knightMoves) {
            if (x1 + move[0] === x2 && y1 + move[1] === y2) {
                return doMove;
            }
        }
        
        return false;
    }]
}

class Bishop extends Piece{// Слон
    constructor(){
        super('B')
    }

    toCanMoves = [(field, coordsOut,coordsIn) => {
        // console.log((coordsIn[0] === coordsOut[0]))
        // console.log((coordsIn[1] === coordsOut[1]))
        // console.log(coordsOut[1])
        // console.log(coordsIn[1])

        // console.log(coordsOut[0])
        // console.log(coordsIn[0])

        // console.log(coordsOut)
        // console.log(coordsIn)

        if (this.isFreidlyFire(field,coordsOut,coordsIn)){
            return false
        }

        let doMove = (field, coordsOut, coordsIn) => {
            let tempField = []

            for (let i = 0;i < field.length;i++){
                tempField.push([...field[i]])
            }

            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
            tempField[coordsOut[0]][coordsOut[1]] = '  '

            return tempField
        }

        if ((Math.abs(coordsIn[0] - coordsOut[0])) === (Math.abs(coordsIn[1] - coordsOut[1]))){
            let xInc = 1
            let yInc = 1
            if (coordsOut[0] - coordsIn[0] > 0){
                yInc = -1
            }
            if (coordsOut[1] - coordsIn[1] > 0){
                xInc = -1
            }

            for(let i = (coordsOut[0] + yInc), k = (coordsOut[1] + xInc);i !== coordsIn[0];i+=yInc,k+=xInc){
                if (field[i][k] !== '  '){
                    return false
                }
            }
            return doMove;
        }else{
            return false;
        }
    }]
}

class Rook extends Piece{// Ладья
    constructor(){
        super('R')
    }

    toCanMoves = [(field, coordsOut,coordsIn) => {
        // console.log((coordsIn[0] === coordsOut[0]))
        // console.log((coordsIn[1] === coordsOut[1]))
        // console.log(coordsOut[1])
        // console.log(coordsIn[1])

        // console.log(coordsOut[0])
        // console.log(coordsIn[0])

        // console.log(coordsOut)
        // console.log(coordsIn)

        if (this.isFreidlyFire(field,coordsOut,coordsIn)){
            return false
        }

        let doMove = (field, coordsOut, coordsIn) => {
            let tempField = []

            for (let i = 0;i < field.length;i++){
                tempField.push([...field[i]])
            }

            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
            tempField[coordsOut[0]][coordsOut[1]] = '  '

            return tempField
        }

        if ((coordsIn[0] === coordsOut[0]) || (coordsIn[1] === coordsOut[1])){
            if (coordsOut[0] - coordsIn[0] === 0){// Горизонтальный ход
                let decIndex = 0
                if(coordsOut[1] - coordsIn[1] < 0){
                    decIndex = 1
                }else{
                    decIndex = -1
                }
                // console.log(decIndex)
                for (let i = (coordsOut[1] + decIndex);i !== coordsIn[1];i+=decIndex){
                    // console.log(i)
                    // console.log(field[coordsOut[0]][i])
                    if (field[coordsOut[0]][i] !== '  '){
                        return false
                    }
                }
            }else{// Вертикальный ход
                let decIndex = 0
                if(coordsOut[0] - coordsIn[0] < 0){
                    decIndex = 1
                }else{
                    decIndex = -1
                }
                // console.log(decIndex)
                for (let i = (coordsOut[0] + decIndex);i !== coordsIn[0];i+=decIndex){
                    // console.log(i)
                    // console.log(field[coordsOut[0]][i])
                    if (field[i][coordsOut[1]] !== '  '){
                        return false
                    }
                }
            }
            return doMove;
        }else{
            return false;
        }
    }]
}

class Queen extends Piece{// Ферзь
    constructor(){
        super('Q')
    }

    toCanMoves = [(field, coordsOut,coordsIn) => {
        // console.log((coordsIn[0] === coordsOut[0]))
        // console.log((coordsIn[1] === coordsOut[1]))
        // console.log(coordsOut[1])
        // console.log(coordsIn[1])

        // console.log(coordsOut[0])
        // console.log(coordsIn[0])

        // console.log(coordsOut)
        // console.log(coordsIn)

        if (this.isFreidlyFire(field,coordsOut,coordsIn)){
            return false
        }

        let doMove = (field, coordsOut, coordsIn) => {
            let tempField = []

            for (let i = 0;i < field.length;i++){
                tempField.push([...field[i]])
            }

            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
            tempField[coordsOut[0]][coordsOut[1]] = '  '

            return tempField
        }

        if (((coordsIn[0] === coordsOut[0]) || (coordsIn[1] === coordsOut[1])) || (Math.abs(coordsIn[0] - coordsOut[0])) === (Math.abs(coordsIn[1] - coordsOut[1]))){

            if (coordsOut[0] - coordsIn[0] === 0){// Горизонтальный ход
                let decIndex = 0
                if(coordsOut[1] - coordsIn[1] < 0){
                    decIndex = 1
                }else{
                    decIndex = -1
                }
                // console.log(decIndex)
                for (let i = (coordsOut[1] + decIndex);i !== coordsIn[1];i+=decIndex){
                    // console.log(i)
                    // console.log(field[coordsOut[0]][i])
                    if (field[coordsOut[0]][i] !== '  '){
                        return false
                    }
                }
            }else if(coordsOut[1] - coordsIn[1] === 0){// Вертикальный ход
                let decIndex = 0
                if(coordsOut[0] - coordsIn[0] < 0){
                    decIndex = 1
                }else{
                    decIndex = -1
                }
                // console.log(decIndex)
                for (let i = (coordsOut[0] + decIndex);i !== coordsIn[0];i+=decIndex){
                    // console.log(i)
                    // console.log(field[coordsOut[0]][i])
                    if (field[i][coordsOut[1]] !== '  '){
                        return false
                    }
                }
            }else{
                let xInc = 1
                let yInc = 1
                if (coordsOut[0] - coordsIn[0] > 0){
                    yInc = -1
                }
                if (coordsOut[1] - coordsIn[1] > 0){
                    xInc = -1
                }

                for(let i = (coordsOut[0] + yInc), k = (coordsOut[1] + xInc);i !== coordsIn[0];i+=yInc,k+=xInc){
                    if (field[i][k] !== '  '){
                        return false
                    }
                }
            }

            return doMove;
        }else{
            return false;
        }
    }]
}

class King extends Piece{// Король
    constructor(){
        super('K')
    }

    toCanMoves = [(field, coordsOut,coordsIn) => {
        // console.log((coordsIn[0] === coordsOut[0]))
        // console.log((coordsIn[1] === coordsOut[1]))
        // console.log(coordsOut[1])
        // console.log(coordsIn[1])

        // console.log(coordsOut[0])
        // console.log(coordsIn[0])

        // console.log(coordsOut)
        // console.log(coordsIn)

        if (this.isFreidlyFire(field,coordsOut,coordsIn)){
            return false
        }

        let doMove = (field, coordsOut, coordsIn) => {
            let tempField = []

            for (let i = 0;i < field.length;i++){
                tempField.push([...field[i]])
            }

            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
            tempField[coordsOut[0]][coordsOut[1]] = '  '

            return tempField
        }

        if (((Math.abs((coordsIn[0] - coordsOut[0])) === 1) || (Math.abs((coordsIn[0] - coordsOut[0])) === 0))
            &&
            ((Math.abs((coordsIn[1] - coordsOut[1])) === 1) || (Math.abs((coordsIn[1] - coordsOut[1])) === 0))){
            return doMove;
        }else{
            return false;
        }
    }, (field, coordsOut,coordsIn, whoIsMoving) => {
        if (this.isFreidlyFire(field,coordsOut,coordsIn, whoIsMoving)){
            return false
        }

        if (coordsOut[1] - coordsIn[1] === -2 && coordsOut[0] - coordsIn[0] === 0){// Если ход направо
            if (whoIsMoving === 'white'){// Если ходят белые
                if(coordsOut[0] === 7){// Проверка что король там где надо
                    if(field[7][7] === 'Rw'){// Проверка на наличие ладьи
                        return (field, coordsOut, coordsIn) => {
                            let tempField = []
                
                            for (let i = 0;i < field.length;i++){
                                tempField.push([...field[i]])
                            }
                
                            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
                            tempField[coordsOut[0]][coordsOut[1]] = '  '

                            tempField[7][5] = 'Rw'
                            tempField[7][7] = '  '
                
                            return tempField
                        }
                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }else{// Если ходят черные
                if(coordsOut[0] === 0){// Проверка что король там где надо
                    if(field[0][7] === 'Rb'){// Проверка на наличие ладьи
                        return (field, coordsOut, coordsIn) => {
                            let tempField = []
                
                            for (let i = 0;i < field.length;i++){
                                tempField.push([...field[i]])
                            }
                
                            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
                            tempField[coordsOut[0]][coordsOut[1]] = '  '

                            tempField[0][5] = 'Rb'
                            tempField[0][7] = '  '
                
                            return tempField
                        }
                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }
        }else if((coordsOut[1] - coordsIn[1] === 2 && coordsOut[0] - coordsIn[0] === 0)){// Если ход налево
            if (whoIsMoving === 'white'){// Если ходят белые
                if(coordsOut[0] === 7){// Проверка что король там где надо
                    if(field[7][0] === 'Rw'){// Проверка на наличие ладьи
                        return (field, coordsOut, coordsIn) => {
                            let tempField = []
                
                            for (let i = 0;i < field.length;i++){
                                tempField.push([...field[i]])
                            }
                
                            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
                            tempField[coordsOut[0]][coordsOut[1]] = '  '

                            tempField[7][3] = 'Rw'
                            tempField[7][0] = '  '
                
                            return tempField
                        }
                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }else{// Если ходят черные
                if(coordsOut[0] === 0){// Проверка что король там где надо
                    if(field[0][0] === 'Rb'){// Проверка на наличие ладьи
                        return (field, coordsOut, coordsIn) => {
                            let tempField = []
                
                            for (let i = 0;i < field.length;i++){
                                tempField.push([...field[i]])
                            }
                
                            tempField[coordsIn[0]][coordsIn[1]] = tempField[coordsOut[0]][coordsOut[1]]
                            tempField[coordsOut[0]][coordsOut[1]] = '  '

                            tempField[0][3] = 'Rb'
                            tempField[0][0] = '  '
                
                            return tempField
                        }
                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }
        }

        return false
    }]
}

export const allPieces = {
    "p":Pawn,
    "N":Knight,
    "B":Bishop,
    "R":Rook,
    "Q":Queen,
    "K":King
}