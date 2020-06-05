import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  RequiredValidator,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', {
      updateOn: 'blur',
      validators: [Validators.required, Validators.minLength(5)],
    }),
    password: new FormControl('', {
      updateOn: 'blur',
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log("Routed to 1login success");
    if (
      this.loginForm.controls.userName.value === 'Admin' &&
      this.loginForm.controls.password.value === 'password'
    ) {
      this.router.navigate(['/loginSuccess']);
      console.log("Routed to login success");
    } else {
      alert('Incorrect User name or password,try again');
    }
  }
}
