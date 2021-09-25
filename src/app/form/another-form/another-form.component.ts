import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-another-form',
  templateUrl: './another-form.component.html',
  styleUrls: ['./another-form.component.css'],
})
export class AnotherFormComponent implements OnInit {
  @Input('form')
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    console.log(this.form);
  }
}
