import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { TemplateService } from '../services/template.service';
import { RateService } from '../services/rate.service';
import { DriverCarService } from '../services/driverCar.service';
import { RouteService } from '../services/route.service';
import { Template } from '../models/template';
import { Rate } from '../models/rate';
import { DriverCar } from '../models/driver_car';
import { Route } from '../models/route';
import { AppComponent } from '../app.component';

@Component({
  selector: 'route-edit',
  templateUrl: '../views/route-edit.html',
  providers: [UserService, TemplateService, RateService, DriverCarService, RouteService]
})

export class RouteEditComponent implements OnInit {

    public titulo: string;
    public templates: Template[];
    public rates: Rate[];
    public driverCars: DriverCar[];
    public route: Route;
    public precio;
    public precioTotal;
    public identity;
    public token;
    public url: string;
    public alertMessage;


    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _templateService: TemplateService,
      private _rateService: RateService,
      private _driverCarService: DriverCarService,
      private _routeService: RouteService
    ){
      this.titulo = 'Editar Ruta';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.route = new Route('', '', '', '', 'false', '', '');
      this.getRateList();
      this.getDriverCarList();
      this.getTempalteList();
      this.getRoute();
    }

    ngOnInit(){
      console.log('Cargado el componente de crear ruta');

    }

    getRoute(){
      this._route.params.forEach((params: Params) => {
        let id = params['id'];
        this._routeService.getRoute(this.token, id).subscribe(
            response => {
              if(!response.route){
                this._router.navigate(['/']);
              }else{
                this.route = response.route;
                console.log(this.route);
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

    getRateList(){
      this._rateService.getRateList(this.token).subscribe(
        response => {
          if(!response.rates){
            this._router.navigate(['/']);

          }else{
            this.rates = response.rates;
            console.log(this.rates);
          }
        },
        error => {
          var errorMessage = <any>error;
             if (errorMessage != null) {
               var body = JSON.parse(error._body);
               console.log(error);
             }
        }
      );
    }

    getDriverCarList(){
      this._driverCarService.getDriverCarList(this.token).subscribe(
        response => {
          console.log(response);
          if(!response.driverCars){
            this._router.navigate(['/']);
          }else{
            this.driverCars = response.driverCars;
            console.log(this.driverCars);
          }
        },
        error => {
          var errorMessage = <any>error;
             if (errorMessage != null) {
               var body = JSON.parse(error._body);
               //this.alertMessage = body.message;
               console.log(error);
             }
        }
      );
    }

    getTempalteList(){
      this._templateService.getTemplateList(this.token).subscribe(
        response => {
          console.log(response);
          if(!response.templates){
            this._router.navigate(['/']);
          }else{
            this.templates = response.templates;
            console.log(this.templates);
          }
        },
        error => {
          var errorMessage = <any>error;
             if (errorMessage != null) {
               var body = JSON.parse(error._body);
               //this.alertMessage = body.message;
               console.log(error);
             }
        }
      );

}


    onSubmit(){
      console.log(this.route.locationAdd);
      this._route.params.forEach((params: Params) => {
        let id = params['id'];
          var flag = true;
          console.log(flag);
          if(this.route.locationAdd == 'true'){
            console.log('bruja');
            this._rateService.getRate(this.token, this.route.rate).subscribe(
                response => {
                  if(!response.rate){
                    this._router.navigate(['/']);
                  }else{
                    this.precio = response.rate;
                    this.precioTotal = this.precio.precio;
                    this.precioTotal = this.precioTotal + 12490;
                    this.route.price = this.precioTotal;
                    console.log('bloblo');
                    this._routeService.editRoute(this.token, id, this.route).subscribe(
                      response => {
                        if(!response.route){
                          this.alertMessage = 'Error en el servidor';
                        }else{
                          this.alertMessage = 'La ruta fue actualizada correctamente';
                          this.route = response.route;
                        }
                      },
                      error => {
                        var errorMessage = <any>error;
                         if(errorMessage != null){
                           var body = JSON.parse(error._body);
                           this.alertMessage = 'Verifica los campos';
                           console.log(error);
                         }
                      }
                    );
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

          }else{
            console.log('brujo');

            this._rateService.getRate(this.token, this.route.rate).subscribe(
                response => {
                  if(!response.rate){
                    this._router.navigate(['/']);
                  }else{
                    this.precio = response.rate;
                    this.route.price = this.precio.precio;
                    this._routeService.editRoute(this.token, id, this.route).subscribe(
                      response => {
                        if(!response.route){
                          this.alertMessage = 'Error en el servidor';
                        }else{
                          this.alertMessage = 'La ruta fue Actualizada correctamente';
                          this.route = response.route;
                        }
                      },
                      error => {
                        var errorMessage = <any>error;
                         if(errorMessage != null){
                           var body = JSON.parse(error._body);
                           this.alertMessage = body.message;
                           this.alertMessage = 'Verifica los campos';
                           console.log(error);
                         }
                      }
                    );
                  }
                },
                error => {
                  var errorMessage = <any>error;
                   if(errorMessage != null){
                     var body = JSON.parse(error._body);
                     this.alertMessage = 'Verifica los campos';
                     console.log(error);
                   }
                }
            );


          }


          });


    }
}
