import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    { path: 'loginPage', component: LoginPageComponent },
    { path: 'loginSuccess', component: LoginSuccessComponent },
    { path: '',   redirectTo: '/loginPage', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginPageComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }