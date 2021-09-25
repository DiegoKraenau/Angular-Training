import { Component, OnInit } from '@angular/core';
import { ObsService, Dato } from '../../services/obs.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  arrDatos: Dato[];

  constructor(private obsService: ObsService) {
    this.arrDatos = [];
  }

  ngOnInit(): void {
    console.log('diego');
    this.obsService.getDatos$().subscribe((res) => {
      this.arrDatos = res;
    });
  }

  add() {
    this.obsService.addDato();
  }
}
