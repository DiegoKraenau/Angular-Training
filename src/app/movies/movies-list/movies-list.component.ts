import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../../Models/Movie';
import { getMovies, addMovies } from '../store/movies.actions';
import { MovieService } from '../../services/movies.service';
import { MovieState } from '../store/movies.reducer';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  movies$ = this.store.select('movies');
  newMovie: Movie = new Movie();

  constructor(
    private store: Store<MovieState>,
    private moviesService: MovieService
  ) {}

  ngOnInit(): void {
    this.generateAllMovies();
  }

  generateAllMovies(): void {
    this.store.dispatch(getMovies());
    // this.moviesService.getMovies().subscribe((res) => {
    //   this.movies = res;
    // });
  }
  addNewMovie(): void {
    this.store.dispatch(addMovies(this.newMovie));
  }
}
