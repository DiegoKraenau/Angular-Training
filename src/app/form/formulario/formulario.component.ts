import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //Variables
  //1 - form
  myform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  //2 - form
  formtwo = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    gender: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  send() {
    console.log('Values:', this.myform.value);
  }

  sendTwo() {
    console.log('Values', this.formtwo.value);
  }
}
