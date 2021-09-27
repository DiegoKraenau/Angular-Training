import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { getMoviesSuccess, addMoviesSuccess } from './movies.actions';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, { movies }) => [...movies]),
  on(addMoviesSuccess, (state, { movie }) => [...state, movie])
);
