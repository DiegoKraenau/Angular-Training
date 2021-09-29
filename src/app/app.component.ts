import { Component, OnInit } from '@angular/core';
import { LoadService } from './services/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-training';
  loading$ = this.loader.loading$;
  constructor(public loader: LoadService) {}

  ngOnInit(): void {
    // this.loadService.getLoad().subscribe((res) => {
    //   console.log('Aqui:', res);
    //   this.load = res;
    // });
  }

  startLogin() {
    // this.loadService.startLoading();
  }

  finishLogin() {
    // this.loadService.finishLoading();
  }
}
