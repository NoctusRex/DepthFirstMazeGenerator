import { Component, OnInit } from '@angular/core';
import { MazeService } from 'src/app/services/maze.service';
import { Location } from '@angular/common';
import { Maze } from 'src/app/models/maze.model';
import { first, forEach } from 'lodash';

@Component({
  selector: 'maze',
  templateUrl: './maze.component.html',
})
export class MazeComponent implements OnInit {
  constructor(private location: Location, protected mazeService: MazeService) {}

  ngOnInit(): void {
    const setup: any = this.location.getState();
    this.drawMaze(this.mazeService.generate(setup.width, setup.height));
  }

  drawMaze(maze: Maze): void {
    const cellSize: number = 30;
    const canvas: HTMLCanvasElement = document.createElement(
      'canvas'
    ) as HTMLCanvasElement;
    canvas.height = maze.height * cellSize;
    canvas.width = maze.width * cellSize;

    const context: CanvasRenderingContext2D = canvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.lineJoin = 'round';

    context.beginPath();

    forEach(maze.cells, (cells) => {
      forEach(cells, (cell) => {
        const positionX: number = cell.x * cellSize;
        const positionY: number = cell.y * cellSize;

        if (cell.hasTopWall) {
          context.moveTo(positionX, positionY);
          context.lineTo(positionX + cellSize, positionY);
        }

        if (cell.hasRightWall) {
          context.moveTo(positionX + cellSize, positionY);
          context.lineTo(positionX + cellSize, positionY + cellSize);
        }

        if (cell.hasBottomWall) {
          context.moveTo(positionX, positionY + cellSize);
          context.lineTo(positionX + cellSize, positionY + cellSize);
        }

        if (cell.hasLeftWall) {
          context.moveTo(positionX, positionY);
          context.lineTo(positionX, positionY + cellSize);
        }
      });

      context.stroke();
    });
    context.closePath();

    canvas.toBlob((blob) => {
      if (blob === null) return;

      const img: HTMLImageElement = document.getElementById(
        'img'
      ) as HTMLImageElement;
      if (!img) return;

      img.src = window.URL.createObjectURL(blob);
    });
  }
}
