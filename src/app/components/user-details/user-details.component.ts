import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user;

  constructor(private _userService: UserServiceService) {}

  ngOnInit(): void {
    this._userService.getUser$().subscribe((user) => {
      this.user = user;
    });
  }
}
