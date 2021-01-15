import React from 'react';

import '../stylesheets/board.css';

import validMoves from './Moves.js';

const initialBoard = [
    ['BR', 'BK', 'BB', 'BQ', 'BX', 'BB', 'BK', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
    ['WR', 'WK', 'WB', 'WQ', 'WX', 'WB', 'WK', 'WR'],
];

const initialState = {
    boardState: initialBoard,
    turn: 'X',
    active: true,
    winText: null,
    checks: false,
    highlightState: Array(8)
        .fill('')
        .map((x) => Array(8).fill(false)),
};

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            computer: 0,
            you: 0,
        };
    }

    reset = () => {
        this.setState({
            ...initialState,
            boardState: Array(8).fill(Array(8).fill(null)),
        });
    };

    handleClick = (i, j) => {
        if (!this.state.active) return;
        console.log(i, j);
        var board = this.state.boardState;
        var name = board[i][j];
        var movesFunc = validMoves[name];
        if (!movesFunc) return;

        var moves = movesFunc(i, j);
        console.log(moves);

        var hl = Array(8).fill('').map((x) => Array(8).fill(false));

        moves.forEach((n, index) => {
            var ni = n[0];
            var nj = n[1];
            console.log(ni, nj);
            hl[ni][nj] = true;
        });

        this.setState({
            highlightState: hl,
        });
    };

    getColor = (i, j) => {
        var t = i + j;
        return t % 2 ? 'brown' : '#aa5';
    };

    renderGrid = () => {
        var buttons = this.state.boardState.map((row, i) => {
            return row.map((col, j) => {
                var border = this.state.highlightState[i][j]
                    ? '1px solid yellow'
                    : 'none';
                return (
                    <button
                        onClick={() => {
                            this.handleClick(i, j);
                        }}
                        style={{
                            background: this.getColor(i, j),
                            color: col && col[0] === 'W' ? 'white' : 'black',
                            border,
                        }}
                    >
                        {col && col[1]}
                    </button>
                );
            });
        });

        console.log(buttons);

        return <div className="grid">{buttons}</div>;
    };

    render() {
        let grid = this.renderGrid();

        let turnText = this.state.turn === 'X' ? 'Your turn' : "O's turn";

        if (!this.state.active) turnText = 'Game Over';

        return (
            <div className="container">
                <h1>Tic Tac Toe</h1>
                <div className="text">{`You: ${this.state.you} | Computer: ${this.state.computer}`}</div>
                <div className="text">{turnText}</div>
                {grid}
                <div className="text" style={{ fontSize: '42px' }}>
                    {this.state.winText || <>&nbsp;</>}
                </div>
                <button className="restart-btn" onClick={this.reset}>
                    Restart
                </button>
            </div>
        );
    }
}

export default Board;
