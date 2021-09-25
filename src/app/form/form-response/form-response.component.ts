import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-response',
  templateUrl: './form-response.component.html',
  styleUrls: ['./form-response.component.css'],
})
export class FormResponseComponent implements OnInit {
  @Input('form')
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    console.log('Response Values:', this.form.value);
  }
}
