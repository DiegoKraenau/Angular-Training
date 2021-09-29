import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompsRoutingModule } from './comps-routing.module';
import { CompOneComponent } from './pages/comp-one/comp-one.component';
import { CompTwoComponent } from './pages/comp-two/comp-two.component';
import { LoadService } from '../services/load.service';

@NgModule({
  declarations: [CompOneComponent, CompTwoComponent],
  providers: [],
  imports: [CommonModule, CompsRoutingModule],
})
export class CompsModule {}
