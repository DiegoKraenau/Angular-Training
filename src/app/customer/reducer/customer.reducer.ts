import { Action } from '@ngrx/store';
import Customer from '../Helpers/Customer';

const initialState: Customer = {
  name: 'Diego',
  lastName: 'Kraenau',
};

export const customerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: 'Nicole',
      };

    default:
      return state;
  }
};
