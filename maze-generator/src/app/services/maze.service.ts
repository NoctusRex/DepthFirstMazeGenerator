import { Injectable } from '@angular/core';
import { Cell } from '../models/cell.model';
import { Maze } from '../models/maze.model';
import { Stack } from '../models/stack.model';

@Injectable()
export class MazeService {
  generate(width: number, height: number): Maze {
    let maze: Maze = new Maze(width, height);
    let visitedCells: Array<Cell> = [];
    let cellStack: Stack<Cell> = new Stack<Cell>();
    let currentCell: Cell;

    currentCell =
      maze.cells[this.getRandomInt(0, width)][this.getRandomInt(0, height)];

    visitedCells.push(currentCell);
    cellStack.push(currentCell);

    while (cellStack.size() > 0) {
      currentCell = cellStack.pop();
      let neighbours: Array<Cell> = this.getUnvisitedNeighbours(
        maze,
        currentCell,
        visitedCells
      );

      if (neighbours?.length > 0) {
        cellStack.push(currentCell);

        let targetCell: Cell =
          neighbours[this.getRandomInt(0, neighbours.length)];
        this.removeWalls(currentCell, targetCell);
        visitedCells.push(targetCell);
        cellStack.push(targetCell);
      }
    }

    return maze;
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1 - min + 1)) + min;
  }

  private getUnvisitedNeighbours(
    maze: Maze,
    currentCell: Cell,
    visitedCells: Array<Cell>
  ): Array<Cell> {
    let cells: Array<Cell> = [];

    if (
      currentCell.x + 1 < maze.width &&
      !visitedCells.includes(maze.cells[currentCell.x + 1][currentCell.y])
    )
      cells.push(maze.cells[currentCell.x + 1][currentCell.y]);
    if (
      currentCell.x - 1 >= 0 &&
      !visitedCells.includes(maze.cells[currentCell.x - 1][currentCell.y])
    )
      cells.push(maze.cells[currentCell.x - 1][currentCell.y]);
    if (
      currentCell.y + 1 < maze.height &&
      !visitedCells.includes(maze.cells[currentCell.x][currentCell.y + 1])
    )
      cells.push(maze.cells[currentCell.x][currentCell.y + 1]);
    if (
      currentCell.y - 1 >= 0 &&
      !visitedCells.includes(maze.cells[currentCell.x][currentCell.y - 1])
    )
      cells.push(maze.cells[currentCell.x][currentCell.y - 1]);

    return cells;
  }

  private removeWalls(currentCell: Cell, targetCell: Cell) {
    // if target cell is to the right
    if (targetCell.x > currentCell.x) {
      currentCell.walls.right = false;
      targetCell.walls.left = false;
    }
    // if target cell is to the left
    if (targetCell.x < currentCell.x) {
      currentCell.walls.left = false;
      targetCell.walls.right = false;
    }
    // if target cell is to the bottom
    if (targetCell.y > currentCell.y) {
      currentCell.walls.bottom = false;
      targetCell.walls.top = false;
    }
    // if target cell is to the top
    if (targetCell.y < currentCell.y) {
      currentCell.walls.top = false;
      targetCell.walls.bottom = false;
    }
  }
}
