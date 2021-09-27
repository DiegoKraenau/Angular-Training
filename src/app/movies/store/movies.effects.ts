import { MovieService } from './../../services/movies.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { getMovies, getMoviesSuccess } from './movies.actions';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.movieService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  //   addMovie$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(addMovies),
  //     tap((movie) => console.log(movie)),
  //     concatMap(({ movie }) =>
  //       this.dataService.addMovies(movie).pipe(
  //         map((newMovie) => addMoviesSuccess(newMovie)),
  //         catchError(() => EmptyError)
  //       )
  //     )
  //   )
  // );

  constructor(private action$: Actions, private movieService: MovieService) {}
}
