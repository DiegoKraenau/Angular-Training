import { Action } from '@ngrx/store';

export const CHANGE_NAME = '[customer] CHANGE_NAME';

export const CHANGE_LASTNAME = '[customer] CHANGE_LASTNAME';

export const RESET_CUSTOMER = '[customer] RESET';

//Actions

export class ChangeNameAction implements Action {
  readonly type = CHANGE_NAME;
}

export class ChangeLastNameAction implements Action {
  readonly type = CHANGE_LASTNAME;

  constructor(public payload: string) {}
}

export class ResetCustomerAction implements Action {
  readonly type = RESET_CUSTOMER;
}

export type actions =
  | ChangeNameAction
  | ChangeLastNameAction
  | ResetCustomerAction;
