import { Component, OnInit } from '@angular/core';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-sildebar',
  templateUrl: './sildebar.component.html',
  styleUrls: ['./sildebar.component.css'],
  providers: [UserService]
})
export class SildebarComponent implements OnInit {

  public user: User;
  public identity;
  public token;


  constructor(
    private _userService: UserService
  ) {
    this.user = new User('','','','','','','','','');
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  logout(){
      localStorage.removeItem('identity');
      localStorage.removeItem('token');
      localStorage.clear();
      this.identity = null;
      this.token = null;
  }

}
