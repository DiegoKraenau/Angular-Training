import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './customer/reducer/customer.reducer';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { CustomerModule } from './customer/customer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModule } from './form/form.module';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';
import { ObsModule } from './obs/obs.module';

//Important
//Every module that u created, u need to put it inside imports in app.module

@NgModule({
  declarations: [AppComponent, TestPipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ customer: customerReducer }),
    CustomerModule,
    BrowserAnimationsModule,
    FormModule,
    MaterialModule,
    LoginModule,
    ObsModule,
    // DiegoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
