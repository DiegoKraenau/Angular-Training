import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { TestModule } from '../test/test.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewCustomerComponent],
  imports: [CommonModule, TestModule, FormsModule],
})
export class CustomerModule {}
