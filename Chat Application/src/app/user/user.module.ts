import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// Routing
import {RouterModule, Router} from '@angular/router';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'sign-up', component: SignupComponent}
    ])
  ]
})
export class UserModule { }
