import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Dato {
  name: string;
  num: number;
}

@Injectable({
  providedIn: 'root',
})
export class ObsService {
  private datos: Dato[];
  private datos$: Subject<Dato[]>;

  constructor() {
    this.datos = [];
    this.datos$ = new Subject();
  }

  addDato() {
    const dato: Dato = {
      name: 'Dato',
      num: 13,
    };
    this.datos.push(dato);
    this.datos$.next(this.datos);
  }

  getDatos$(): Observable<Dato[]> {
    return this.datos$.asObservable();
  }
}
