import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css'],
})
export class TestPipeComponent implements OnInit {
  prueba = {
    name: 'Diego prueba',
  };

  constructor() {}

  ngOnInit(): void {}
}
