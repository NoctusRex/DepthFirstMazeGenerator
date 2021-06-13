import { Routes } from '@angular/router';
import { MazeComponent } from '../pages/maze/maze.component';
import { SetupComponent } from '../pages/setup/setup.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: SetupComponent,
  },
  {
    path: 'maze',
    component: MazeComponent,
  },
];
