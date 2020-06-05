import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginSuccessComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
