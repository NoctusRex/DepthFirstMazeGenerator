export class Cell {
  x: number;
  y: number;
  walls: { [side: string]: boolean };

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.walls = {
      top: true,
      bottom: true,
      left: true,
      right: true,
    };
  }

  get hasTopWall(): boolean {
    return this.walls.top;
  }

  get hasBottomWall(): boolean {
    return this.walls.bottom;
  }

  get hasLeftWall(): boolean {
    return this.walls.left;
  }

  get hasRightWall(): boolean {
    return this.walls.right;
  }
}
