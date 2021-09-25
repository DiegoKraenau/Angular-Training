import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiegoComponent } from './diego/diego.component';
import { DiegoModule } from '../diego/diego.module';

@NgModule({
  declarations: [DiegoComponent],
  imports: [CommonModule, DiegoModule],
  exports: [DiegoComponent],
})
export class TestModule {}
