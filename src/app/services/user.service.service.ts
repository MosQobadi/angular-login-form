import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})

export class UserServiceService {
  private users: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    JSON.parse(localStorage.getItem('users')) || []
  );
  private currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('user')) || []
  );

  constructor() {}

  getUser$(): Observable<any> {
    return this.currentUser.asObservable();
  }

  getUsers$(): Observable<any> {
    return this.users.asObservable();
  }

  setUser(user): void {
    // set user
    this.currentUser.next(user);
    // save to localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }

  setUsers(users) {
    // update users
    this.users.next(users);
    // save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
  }

  addUser(user) {
    let users = this.users.getValue();

    users.push(user);

    this.setUsers(users);
  }

  updateUser(selectedUser) {
    let users = this.users.getValue();

    users.forEach((user) => {
      if (user._id === selectedUser._id) {
        user.firstName === selectedUser.firstName;
        user.lastName === selectedUser.lastName;
        user.email === selectedUser.email;
      }
      
      if (user._id === this.currentUser.getValue()._id) {
        this.currentUser.next(user);
      }
      this.setUsers(users);
    });
  }

  // getUsers(): any {
  //   //cheeck if users loaded
  //   if (this.users) {
  //     return this.users;
  //   } else {
  //     this.users = JSON.parse(localStorage.getItem('users'));

  //     if (this.users) {
  //       return this.users;
  //     } else {
  //       this.users = [];
  //     }
  //   }
  //   // this.users = JSON.parse(localStorage.getItem('users'));
  // }

  // setUsers(users) {
  //   // update users
  //   this.users = users;
  //   // save to localStorage
  //   localStorage.setItem('users', JSON.stringify(this.users));
  // }

  // addUser(user) {
  //   const date = new Date();
  //   user['_id'] = date.getTime();
  //   this.users.unshift(user);
  //   // save to localStorage
  //   localStorage.setItem('users', JSON.stringify(this.users));
  // }

  // getUser() {
  //   // chek if user loaded
  //   // this.user = JSON.parse(localStorage.getItem('user'));
  //   if (this.user) {
  //     return this.user;
  //   } else {
  //     this.user = JSON.parse(localStorage.getItem('user'));
  //   }
  // }

  // setUser(user) {
  //   // set user
  //   this.user = user;
  //   // save to localStorage
  //   localStorage.setItem('user', JSON.stringify(this.user));
  // }

  // getUsersFromLocaStorge(){
  //   let users = JSON.parse(localStorage.getItem('users'));

  //   return users;
  // }

  // logUser(user){
  //   return user;
  // }

  // setActiveUsersToLocalStorage(){
  //   localStorage.setItem('activeUsers', JSON.stringify(this.activeUsers))
  // }

  // getActiveUsersToLocalStorage(){
  //   let activeUsers = JSON.parse(localStorage.getItem('activeUsers'));

  //   return activeUsers;
  // }

  // activateUser(user){

  //   this.activeUsers.unshift(user);
  // }
}
