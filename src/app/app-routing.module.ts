import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiegoComponent } from './test/diego/diego.component';
import { FormPageComponent } from './form/pages/form-page/form-page.component';
import { RoleGuard } from './role.guard';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AddFormComponent } from './obs/add-form/add-form.component';
import { MoviesPageComponent } from './movies/pages/movies-page/movies-page.component';
import { ProfileResolverService } from './services/profile-resolver.service';

const routes: Routes = [
  { path: 'customer', component: ViewCustomerComponent },
  { path: 'form', component: FormPageComponent, canActivate: [RoleGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'obs', component: AddFormComponent },
  { path: 'movies', component: MoviesPageComponent },
  {
    path: 'comp',
    loadChildren: () =>
      import('./comps/comps.module').then((m) => m.CompsModule),
    resolve: {
      profile: ProfileResolverService,
    },
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginFormComponent },
  // { path: 'test', component: DiegoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
