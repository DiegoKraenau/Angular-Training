import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../Models/Movie';
import { Observable } from 'rxjs';
import axios from 'axios';
// import { map, catchError } from 'rxjs/operators;

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<ReadonlyArray<Movie>> {
    return this.http.get<Movie[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
