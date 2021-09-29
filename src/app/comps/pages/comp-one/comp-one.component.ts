import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadService } from '../../../services/load.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
})
export class CompOneComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => console.log(data));
    // this.loadService.getLoad().subscribe((res) => {
    //   console.log(res);
    // });
  }

  // startLogin() {
  //   this.loadService.startLoading();
  // }

  // finishLogin() {
  //   this.loadService.finishLoading();
  // }
}
