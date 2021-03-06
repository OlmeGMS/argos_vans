import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { RolService } from '../services/rol.service';
import { EmployeeService } from '../services/employee.service';
import { CostCenterService } from '../services/costCenter.service';
import { CityService } from '../services/city.service';
import { LocationService } from '../services/location.service';
import { User } from '../models/user';
import { Rol } from '../models/rol';
import { CostCenter } from '../models/costCenter';
import { City } from '../models/city';
import { Location } from '../models/location';
import { Employee } from '../models/employee';
import { AppComponent } from '../app.component';

@Component({
  selector: 'employee-detail',
  templateUrl: '../views/employee-detail.html',
  providers: [UserService, RolService, CostCenterService, LocationService, CityService, EmployeeService]
})

export class EmployeeDatilComponent implements OnInit {

  public titulo: string;
  public user: User;
  public employee: Employee;

  public identity;
  public token;
  public url: string;
  public alertMessage;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,

    private _employeeService: EmployeeService
  ){
    this.titulo = 'Ver datos del empleado';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = new User('', '', '', '', '', '','', 'null', '', true);
    this.employee = new Employee('', '', '', '', '', true);

    this.getEmployee();
  }
  ngOnInit(){
    console.log('cargado el componente de crear usuario empleado');
  }

  getEmployee(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._employeeService.getEmployee(this.token, id).subscribe(
          response => {
            if(!response.employee){
              this._router.navigate(['/']);
            }else{
              this.employee = response.employee;
              console.log(this.employee);
            }
          },
          error => {
            var errorMessage = <any>error;
             if(errorMessage != null){
               var body = JSON.parse(error._body);
               console.log(error);
             }
          }
      );
    });

  }


  onSubmit(){

      this._router.navigate(['/empleados']);

  }

}
