const validMoves = {
    WP: (i, j) => {
        if (i === 6) return [[i - 1, j], [i - 2, j]];
        return [[i, j - 1]];
    },
    BP: (i, j) => {
        if (i === 1) return [[i + 1, j], [i + 2, j]];
        return [[i, j + 1]];
    },
    WX: (i, j) => {
        return [[i + 1, j], [i - 1, j], [i, j + 1],[i, j - 1], [i + 1, j + 1], [i + 1, j - 1], [i - 1, j - 1], [i - 1, j + 1]];
    },
    BX: (i, j) => {
        return [[i + 1, j], [i - 1, j], [i, j + 1],[i, j - 1], [i + 1, j + 1], [i + 1, j - 1], [i - 1, j - 1], [i - 1, j + 1]];
    },
    WK: (i, j) => {
        return [[i + 2, j + 1], [i + 2, j - 1], [i - 2, j + 1], [i - 2, j - 1], [i + 1, j + 2], [i + 1, j - 2], [i - 1, j + 2], [i - 1, j - 2]]
    },
    BK: (i, j) => {
        return [[i + 2, j + 1], [i + 2, j - 1], [i - 2, j + 1], [i - 2, j - 1], [i + 1, j + 2], [i + 1, j - 2], [i - 1, j + 2], [i - 1, j - 2]]
    },
    WR: (i, j) => {
        var moves = [];
        for (var rpos = 0; rpos < 8; rpos++){
            for (var cpos = 0; cpos < 8; cpos++){
                if (rpos === i)
                    if(cpos !== j)
                        moves.push([rpos, j]);
                if (cpos === j)
                    if(rpos !== i)
                        moves.push([i, cpos]);
                    
            }
        }
        return moves;
    },
    BR: (i, j) => {
        var moves = [];
        for (var rpos = 0; rpos < 8; rpos++){
            for (var cpos = 0; cpos < 8; cpos++){
                if (rpos === i)
                    if(cpos !== j)
                        moves.push([rpos, j]);
                if (cpos === j)
                    if(rpos !== i)
                        moves.push([i, cpos]);
                    
            }
        }
    },
    WB: (i, j) => {
        var moves = [];
        for (var rpos = 0; rpos < 8; rpos++){
            for (var cpos = 0; cpos < 8; cpos++){
                if( rpos - i === cpos - j || rpos - i === -(cpos - j))
                    moves.push([rpos, cpos]);
            }
        }
        return moves;
    },
    BB: (i, j) => {
        var moves = [];
        for (var rpos = 0; rpos < 8; rpos++){
            for (var cpos = 0; cpos < 8; cpos++){
                if( rpos - i === cpos - j || rpos - i === -(cpos - j))
                    moves.push([rpos, cpos]);
            }
        }
        return moves;
    },
    WQ: (i, j) => {
        var moves = [];
        for (var rpos = 0; rpos < 8; rpos++){
            for (var cpos = 0; cpos < 8; cpos++){
                if( rpos - i === cpos - j || rpos - i === -(cpos - j))
                    moves.push([rpos, cpos]);
            }
        }
        for (rpos = 0; rpos < 8; rpos++){
            for (cpos = 0; cpos < 8; cpos++){
                if (rpos === i)
                    if(cpos !== j)
                        moves.push([rpos, j]);
                if (cpos === j)
                    if(rpos !== i)
                        moves.push([i, cpos]);
                    
            }
        }
        return moves;
    },
    BQ: (i, j) => {
        var moves = [];
        for (var rpos = 0; rpos < 8; rpos++){
            for (var cpos = 0; cpos < 8; cpos++){
                if( rpos - i === cpos - j || rpos - i === -(cpos - j))
                    moves.push([rpos, cpos]);
            }
        }
        for (rpos = 0; rpos < 8; rpos++){
            for (cpos = 0; cpos < 8; cpos++){
                if (rpos === i)
                    if(cpos !== j)
                        moves.push([rpos, j]);
                if (cpos === j)
                    if(rpos !== i)
                        moves.push([i, cpos]);
                    
            }
        }
        return moves;
    },
};

export default validMoves;
