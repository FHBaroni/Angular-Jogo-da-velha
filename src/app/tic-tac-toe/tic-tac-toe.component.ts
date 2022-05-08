import { Component } from '@angular/core';

@Component({
  selector: 'jog-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  processPlay(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;
      //verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] == this.currentPlayer &&
        this.board[i][1] == this.currentPlayer &&
        this.board[i][2] == this.currentPlayer
      ) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] == this.currentPlayer &&
        this.board[1][i] == this.currentPlayer &&
        this.board[2][i] == this.currentPlayer
      ) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][0] == this.currentPlayer &&
        this.board[1][1] == this.currentPlayer &&
        this.board[2][2] == this.currentPlayer
      ) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][2] == this.currentPlayer &&
        this.board[1][1] == this.currentPlayer &&
        this.board[2][0] == this.currentPlayer
      ) {
        return true;
      }
    }
    return false;
  }

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
