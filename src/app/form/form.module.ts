import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AnotherFormComponent } from './another-form/another-form.component';
import { FormResponseComponent } from './form-response/form-response.component';

@NgModule({
  declarations: [FormularioComponent, FormPageComponent, AnotherFormComponent, FormResponseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [FormPageComponent],
})
export class FormModule {}
