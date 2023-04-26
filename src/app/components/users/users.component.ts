import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user.service.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user;
  users: any[];
  userFirstName: string = '';
  userLastName;
  firstName;
  userIndex;
  isUpdated: boolean = false;
  selectedUser: any;
  showEditForm = false;

  constructor(
    private _userService: UserServiceService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  updateForm = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
  });

  formValue = this.updateForm.value;

  ngOnInit(): void {
    this._userService.getUsers$().subscribe((users) => {
      this.users = users;
    });
  }

  onSelect(user: any) {
    this.showEditForm = true;
    this.selectedUser = user;

    this.updateForm.get('firstName').setValue(user.firstName);
    this.updateForm.get('lastName').setValue(user.lastName);
    this.updateForm.get('email').setValue(user.email);
  }

  onSave() {
    const values = this.updateForm.getRawValue();

    this.selectedUser.firstName = values.firstName;
    this.selectedUser.lastName = values.lastName;
    this.selectedUser.email = values.email;

    this._userService.updateUser(this.selectedUser);

    this.updateForm.reset();
    // this.users.forEach((user) => {
    //   user.firstName === this.selectedUser.firstName;
    //   user.lastName === this.selectedUser.lastName;
    //   user.email === this.selectedUser.email;
    //   this._userService.setUsers(this.users);
    // });
  }

  // onSave(index) {
  //   // console.log(this.updateForm.getRawValue());

  //   // let var1=4;
  //   // let var2=var1;
  //   // var2=5;
  //   // console.log(var1);

  //   // let var3=[{name:'amin',age:4},{name:'mostafa',age:200}];
  //   // let var4=var3[0];
  //   // var4.age=20;
  //   // console.log(var3);

  //   const values = this.updateForm.getRawValue();

  //   for (const user of this.users) {
  //     if (user._id === this.selectedUser._id && this.user) {
  //       this.selectedUser.firstName = values.firstName;
  //       this.selectedUser.lastName = values.lastName;
  //       this.selectedUser.email = values.email;

  //       this.updateForm.reset();
  //     }

  //     // if (this.users.indexOf(this.selectedUser)) {
  //     //   this.users[this.selectedUser] == values;
  //     // }

  //     this.users.splice(index, 1);
  //     // this._dataService.addUser(values);
  //   }

  //   // this._dataService.addUser(values);
  // }

  onDelete(user) {
    this.users = this.users.filter((item) => {
      return item._id !== user._id;
    });
    this._userService.setUsers(this.users);
  }

  onDeleteByIndex(index, user) {
    this.users.splice(index, 1);
    this._userService.setUsers(this.users);

    this.selectedUser = user;

    for (const user of this.users) {
      if (user._id === this.selectedUser._id) {
        this._router.navigateByUrl('/');
      }
    }
  }
}
