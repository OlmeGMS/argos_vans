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
  selector: 'route-add',
  templateUrl: '../views/route-add.html',
  providers: [UserService, TemplateService, RateService, DriverCarService, RouteService]
})

export class RouteAddComponent implements OnInit {

    public titulo: string;
    public templates: Template[];
    public template: Template;
    public rates: Rate[];
    public driverCars: DriverCar[];
    public route: Route;
    public precio;
    public precioTotal;
    public identity;
    public token;
    public cantLocalidades;
    public suma;
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
      this.titulo = 'Crear Ruta';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.route = new Route('', '', '', '', 'false', '', '', 'null','null',true);
      this.getRateList();
      this.getDriverCarList();
      this.getTempalteList();
    }

    ngOnInit(){
      console.log('Cargado el componente de crear ruta');

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
      var flag = true;
      console.log(flag);
      console.log('ver');
      console.log(this.route.template);
      let id = this.route.template;

      this._templateService.getTemplate(this.token, id).subscribe(
          response => {
            if(!response.template){
              this._router.navigate(['/']);
            }else{
              this.template = response.template;
              console.log(this.template);

              console.log('il');
              console.log(this.template);
              if(this.template.canLocalidades != "1"){
                this._rateService.getRate(this.token, this.route.rate).subscribe(
                    response => {
                      if(!response.rate){
                        this._router.navigate(['/']);
                      }else{
                        this.precio = response.rate;
                        this.precioTotal = this.precio.precio;

                        this.cantLocalidades = this.template.canLocalidades;
                        this.suma = this.cantLocalidades * 12490;

                        this.precioTotal = this.precioTotal + this.suma;
                        this.route.price = this.precioTotal;
                        this._routeService.addRoute(this.token, this.route).subscribe(
                          response => {
                            if(!response.route){
                              this.alertMessage = 'Error en el servidor';
                            }else{
                              this.alertMessage = 'La ruta fue creada correctamente';
                              this.route = response.route;
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
                this._rateService.getRate(this.token, this.route.rate).subscribe(
                    response => {
                      if(!response.rate){
                        this._router.navigate(['/']);
                      }else{
                        this.precio = response.rate;
                        this.route.price = this.precio.precio;
                        this._routeService.addRoute(this.token, this.route).subscribe(
                          response => {
                            if(!response.route){
                              this.alertMessage = 'Error en el servidor';
                            }else{
                              this.alertMessage = 'La ruta fue creada correctamente';
                              this.route = response.route;
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
                    },
                    error => {
                      var errorMessage = <any>error;
                       if(errorMessage != null){
                         var body = JSON.parse(error._body);
                         console.log(error);
                       }
                    }
                );
              }
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


      /*
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
                this._routeService.addRoute(this.token, this.route).subscribe(
                  response => {
                    if(!response.route){
                      this.alertMessage = 'Error en el servidor';
                    }else{
                      this.alertMessage = 'La ruta fue creada correctamente';
                      this.route = response.route;
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
                this._routeService.addRoute(this.token, this.route).subscribe(
                  response => {
                    if(!response.route){
                      this.alertMessage = 'Error en el servidor';
                    }else{
                      this.alertMessage = 'La ruta fue creada correctamente';
                      this.route = response.route;
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
            },
            error => {
              var errorMessage = <any>error;
               if(errorMessage != null){
                 var body = JSON.parse(error._body);
                 console.log(error);
               }
            }
        );


      }

*/



    }
}
