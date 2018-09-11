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
  public url: string;


  constructor(
    private _userService: UserService
  ) {
    this.user = new User('','','','','','','','','', true);
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    console.log('o');
    console.log(this.identity);
  }


  logout(){
      localStorage.removeItem('identity');
      localStorage.removeItem('token');
      localStorage.clear();
      this.identity = null;
      this.token = null;
  }

}