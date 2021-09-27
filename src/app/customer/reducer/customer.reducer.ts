import { Action } from '@ngrx/store';
import Customer from '../Helpers/Customer';
import {
  CHANGE_NAME,
  CHANGE_LASTNAME,
  actions,
  RESET_CUSTOMER,
} from './customers.actions';

//State interface

export interface CustomerState {
  customer: Customer;
}

//Reducers
const initialState: Customer = {
  name: 'Diego',
  lastName: 'Kraenau',
};

export const customerReducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: 'Nicole',
      };

    case CHANGE_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };

    case RESET_CUSTOMER:
      return {
        name: 'Diego',
        lastName: 'Kraenau',
      };
    default:
      return state;
  }
};
