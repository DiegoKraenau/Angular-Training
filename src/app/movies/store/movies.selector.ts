import { createSelector } from '@ngrx/store';
import { MovieState } from './movies.reducer';
import { Movie } from '../../Models/Movie';
import { CustomerState } from '../../customer/reducer/customer.reducer';

export interface States {
  customer: CustomerState;
  movies: MovieState;
}

export const selectMovies = (state: States) => state.movies;

export const movieSelector = createSelector(
  selectMovies,
  (state: MovieState) => state.movies
);
