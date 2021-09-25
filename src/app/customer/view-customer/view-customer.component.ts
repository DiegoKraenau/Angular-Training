import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import Customer from '../Helpers/Customer';

interface CustomerState {
  customer: Customer;
}

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  customer: Customer = {};
  prueba = new Date(1980, 6, 31);

  constructor(private store: Store<CustomerState>) {
    this.store.subscribe((state) => {
      this.customer = state.customer;
    });
  }

  ngOnInit(): void {}

  changeName() {
    const action: Action = {
      type: 'CHANGE_NAME',
    };
    this.store.dispatch(action);
  }
}
