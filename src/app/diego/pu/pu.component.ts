import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pu',
  templateUrl: './pu.component.html',
  styleUrls: ['./pu.component.css'],
})
export class PuComponent implements OnInit {
  prueba = {
    name: 'Nicole',
  };

  constructor() {}

  ngOnInit(): void {}
}
