class Piece{
    notationName;

    constructor(notationName){
        this.notationName = notationName
    }

    toCanMove(field,coordsOut,coordsIn){
        return true;
    }
}

class Pawn extends Piece{// Пешка
    constructor(){
        super('p')
    }
}

class Knight extends Piece{// Конь
    constructor(){
        super('N')
    }
}

class Bishop extends Piece{// Слон
    constructor(){
        super('B')
    }
}

class Rook extends Piece{// Ладья
    constructor(){
        super('R')
    }

    toCanMove(field,coordsOut,coordsIn){
        if ((coordsIn[0] === coordsOut[0]) || (coordsIn[1] === coordsOut[1])){
            return true;
        }else{
            return false;
        }
    }
}

class Queen extends Piece{// Ферзь
    constructor(){
        super('Q')
    }
}

class King extends Piece{// Король
    constructor(){
        super('K')
    }
}

module.exports = [Pawn,Knight,Bishop,Rook,Queen,King]