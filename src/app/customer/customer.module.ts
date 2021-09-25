import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { TestModule } from '../test/test.module';

@NgModule({
  declarations: [ViewCustomerComponent],
  imports: [CommonModule, TestModule],
})
export class CustomerModule {}
