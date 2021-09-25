import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiegoComponent } from './test/diego/diego.component';
import { FormPageComponent } from './form/pages/form-page/form-page.component';

const routes: Routes = [
  { path: 'customer', component: ViewCustomerComponent },
  { path: 'form', component: FormPageComponent },
  // { path: 'test', component: DiegoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
