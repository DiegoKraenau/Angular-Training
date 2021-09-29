import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompOneComponent } from './pages/comp-one/comp-one.component';
import { CompTwoComponent } from './pages/comp-two/comp-two.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'comp1', component: CompOneComponent },
      { path: 'comp2', component: CompTwoComponent },
      { path: '**', redirectTo: 'comp1' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompsRoutingModule {}
