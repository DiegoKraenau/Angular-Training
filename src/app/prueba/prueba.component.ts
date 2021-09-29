import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit {
  constructor(public loader: LoadService) {}

  ngOnInit(): void {}
}
