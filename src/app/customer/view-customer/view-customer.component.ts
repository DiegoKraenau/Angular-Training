import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import Customer from '../Helpers/Customer';
import {
  ChangeNameAction,
  ChangeLastNameAction,
} from '../reducer/customers.actions';
import { CustomerState } from '../reducer/customer.reducer';
import { ResetCustomerAction } from '../reducer/customers.actions';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  customer: Customer = {};
  prueba = new Date(1980, 6, 31);

  constructor(private store: Store<CustomerState>) {
    this.store.select('customer').subscribe((state) => {
      this.customer = state;
    });
  }

  ngOnInit(): void {}

  changeName() {
    const action = new ChangeNameAction();
    this.store.dispatch(action);
  }

  changeLastName() {
    const action = new ChangeLastNameAction('Rodriguez');
    this.store.dispatch(action);
  }

  reset() {
    const action = new ResetCustomerAction();
    this.store.dispatch(action);
  }
}
