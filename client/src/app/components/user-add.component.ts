import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { RolService } from '../services/rol.service';
import { User } from '../models/user';
import { Rol } from '../models/rol';
import { AppComponent } from '../app.component';


@Component({
  selector: 'user-add',
  templateUrl: '../views/user-add.html',
  providers: [UserService, RolService]
})

export class  UserAddComponent implements OnInit {
    public titulo: string;
    public user: User;
    public identity;
    public token;
    public url: string;
    public alertMessage;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _rolService: RolService
    ){
      this.titulo = 'Crear usuario';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = new User('', '', '', '', '', '','', 'null', '', true);
    }

    ngOnInit(){
      console.log('cargado el componente de crear usuario');
    }

    onSubmit(){
      console.log(this.user);
      this._userService.addUser(this.token, this.user).subscribe(
        response => {
          if (!response.user) {
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = '¡El usuario fue creado correctamente!'
          }
        },
        error => {
          var errorMessage = <any>error;
           if(errorMessage != null){
             var body = JSON.parse(error._body);
             this.alertMessage = body.message;
             console.log(error);
           }
        }
      );
    }
}
