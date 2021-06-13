import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetupComponent } from './pages/setup/setup.component';
import { MazeComponent } from './pages/maze/maze.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MazeService } from './services/maze.service';

@NgModule({
  declarations: [AppComponent, SetupComponent, MazeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [MazeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
