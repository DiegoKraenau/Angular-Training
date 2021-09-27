import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from '../services/movies.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesListComponent, MoviesPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [MovieService],
  exports: [MoviesPageComponent],
})
export class MoviesModule {}
