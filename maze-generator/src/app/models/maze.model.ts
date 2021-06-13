import { Cell } from './cell.model';

export class Maze {
  width: number;
  height: number;
  cells: Array<Array<Cell>>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = [];

    for (let i: number = 0; i < width; i++) {
      this.cells[i] = [];
      for (let j: number = 0; j < height; j++) {
        this.cells[i][j] = new Cell(i, j);
      }
    }
  }

  get totalCells(): number {
    return this.width * this.height;
  }
}
