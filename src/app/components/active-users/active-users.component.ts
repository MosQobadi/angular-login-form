import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: any;
  selectedUser: any;
  constructor(private _usersService: UserServiceService){}

  

  // this.activeUsers = localStorage.getItem('activeUsers');

  ngOnInit(): void {
    

    // console.log(localStorage.getItem('activeUsers'));    
  }

  
  // onSignoutUser(){

    // console.log(user);
    

    
    // for (const user of this.activeUsers) {
    //   if(user._id === this.selectedUser._id){
    //    let users = this._usersService.getActiveUsersToLocalStorage();

    //    let newUsers = users.pop(this.selectedUser);

    //    localStorage.setItem('activeUsers', JSON.stringify(newUsers))
      // }
    // }
  // }
}
