import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { getMoviesSuccess, addMoviesSuccess } from './movies.actions';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
  user: any;
}

// const initialState: ReadonlyArray<Movie> = [];

const initialState: MovieState = {
  movies: [],
  user: {
    name: 'Diego',
  },
};

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: [...movies],
  })),
  // on(getMoviesSuccess, (state, { movies }) => [...movies]),
  on(addMoviesSuccess, (state, { movie }) => ({
    ...state,
    movies: [...state.movies, movie],
  }))
  // on(addMoviesSuccess, (state, { movie }) => [...state, movie])
);
