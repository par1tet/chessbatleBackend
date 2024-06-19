class Piece{
    notationName;

    constructor(notationName){
        this.notationName = notationName
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