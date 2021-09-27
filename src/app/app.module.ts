import { MovieEffects } from './movies/store/movies.effects';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';
import { MoviesModule } from './movies/movies.module';
import { movieReducer } from './movies/store/movies.reducer';
import { EffectsModule } from '@ngrx/effects';

//Important
//Every module that u created, u need to put it inside imports in app.module

@NgModule({
  declarations: [AppComponent, TestPipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ customer: customerReducer, movies: movieReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([MovieEffects]),
    CustomerModule,
    BrowserAnimationsModule,
    FormModule,
    MaterialModule,
    LoginModule,
    ObsModule,
    HttpClientModule,
    MoviesModule,
    // DiegoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
