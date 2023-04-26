import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user.service.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  hasLoggedIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _userService: UserServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],

      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this._userService.getUsers$().subscribe((users) => {
      users.forEach((user) => {
        if (
          users !== null &&
          user.email === this.loginForm.value.email &&
          user.password === this.loginForm.value.password
        ) {
          this._userService.setUser(user);

          this._router.navigateByUrl('/profile');
        }
      });
    });

    // const users = this._userService.users$.getValue();
    // users.forEach((user) => {
    //   if (
    //     this._userService.getUser() !== null &&
    //     user.email === this.loginForm.value.email &&
    //     user.password === this.loginForm.value.password
    //   ) {
    //     this._userService.setUser(user);
    //     this._router.navigateByUrl('/profile');
    //   }
    // });
    // this._userService.getUsers().forEach((user) => {
    //   if (
    //     this._userService.getUser() !== null &&
    //     user.email === this.loginForm.value.email &&
    //     user.password === this.loginForm.value.password
    //   ) {
    //     this._userService.setUser(user);
    //     this._router.navigateByUrl('/profile');
    //   }
    // });
    // for (const user of this._userService.getUsers()) {
    //   if (
    //     user.email === this.loginForm.value.email &&
    //     user.password === this.loginForm.value.password
    //   ) {
    //     this._userService.setUser(user);
    //     this._router.navigateByUrl('/profile');
    //   }
    // }
    // if(valid){
    //   console.log('valid');
    // }else{
    //   console.log('invalid credentials!');
    // }
  }
}
