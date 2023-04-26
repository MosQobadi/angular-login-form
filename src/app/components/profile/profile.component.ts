import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user.service.service';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _userService: UserServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // this.user = this._userService.getUser();
  }

  logOutUser(): void {
    localStorage.removeItem('user');
  }
}
