import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user.service.service';
import { Observable, Subject, Subscriber, takeUntil } from 'rxjs';
import { of } from 'rxjs';
import { __values } from 'tslib';

import { User } from 'src/app/user';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Input() item = '';

  users;
  newUser: any;
  allUsers: any;
  persons: any;
  data: any;

  constructor(
    private _usersService: UserServiceService,
    private fb: FormBuilder,
    private _router: Router
  ) {}

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    let newUser = this.registerForm.value;
    const date = new Date();
    newUser['_id'] = date.getTime();

    this._usersService.addUser(newUser);

    this._usersService.setUser(newUser);

    this._router.navigateByUrl('/profile');
  }

  deleteAllUsers() {
    localStorage.clear();
  }
}

// let unsubscribe: Subject<boolean> = new Subject<boolean>();
// this._usersService
//   .getUsers$()
//   .pipe(takeUntil(unsubscribe))
//   .subscribe((users) => {
//     unsubscribe.next(false);
//     unsubscribe.complete();
//     users.push(newUser);
//     this._usersService.setUsers(users);
//     this.registerForm.reset();
//   });
