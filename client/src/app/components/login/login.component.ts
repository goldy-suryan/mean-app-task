import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { add_user, auth_user } from './state/login.action';
import { getUser } from './state/login.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  invalidMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginFormInit();
  }

  loginFormInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.invalid) {
      this.invalidMessage = 'Please fill the form correctly';
      return;
    }
    this.store.dispatch(add_user(this.loginForm.value));
  }
}
