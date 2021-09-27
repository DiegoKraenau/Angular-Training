import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Movie } from '../../Models/Movie';
import {
  getMovies,
  addMovies,
  addMoviesSuccess,
} from '../store/movies.actions';
import { MovieService } from '../../services/movies.service';
import { MovieState } from '../store/movies.reducer';
import { movieSelector } from '../store/movies.selector';
import { map, take } from 'rxjs/operators';
import { CustomerState } from '../../customer/reducer/customer.reducer';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: ReadonlyArray<Movie> = [];
  // Get movies from MovieStore
  // movies$ = this.store.pipe(
  //   select('movies'),
  //   map((state) => state.movies)
  // );
  //Get Movies from a selector
  // movies$ = this.store.pipe(select(movieSelector));
  //Get movie store and then map movies in ngOnInit
  movieStore$ = this.store.select('movies');
  newMovie: Movie = new Movie();

  constructor(private store: Store<any>, private moviesService: MovieService) {}

  ngOnInit(): void {
    this.generateAllMovies();
    this.movieStore$.subscribe((res) => {
      this.movies = res.movies;
    });
  }

  generateAllMovies(): void {
    this.store.dispatch(getMovies());
    // console.log(this.movies$);
    this.moviesService.getMovies().subscribe((res) => {
      this.movies = res;
    });
  }
  addNewMovie(): void {
    console.log(this.newMovie);
    this.store.dispatch(addMoviesSuccess(this.newMovie));
    this.newMovie = new Movie();
    console.log(this.movies);
  }
}
