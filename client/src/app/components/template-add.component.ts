import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { TemplateService } from '../services/template.service';
import { CostCenterService } from '../services/costCenter.service';
import { ServiInformacionService } from '../services/serviinformacion.service';
import { Template } from '../models/template';
import { CostCenter } from '../models/costCenter';
import { AppComponent } from '../app.component';

@Component({
  selector: 'template-add',
  templateUrl: '../views/template-add.html',
  providers: [UserService, TemplateService, CostCenterService, ServiInformacionService]
})

export class TemplateAddComponent implements OnInit{

  public titulo: string;
  public template: Template;
  public costCenters: CostCenter[];
  public identity;
  public token;
  public ciudad;
  public direccion;
  public servi;
  public identificador;
  public info:any = [];
  public url: string;
  public alertMessage;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _templateService: TemplateService,
    private _costCenterService: CostCenterService,
    private _servinformacionService: ServiInformacionService,
  ){
    this.titulo = 'Crear planilla de recorrido';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.template = new Template('', '', '', '', '', '', '', '', '', '', '');
    this.getCostCenterList();
  }

  ngOnInit(){
    console.log('cargado el componente crear planilla');
  }

  getCostCenterList(){
    this._costCenterService.getCostCenterList(this.token).subscribe(
      response => {
        console.log(response);
        if(!response.costCenter){
          this._router.navigate(['/']);
        }else{
          this.costCenters = response.costCenter;
          console.log(this.costCenters);
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

  searchLocation(address){
    console.log(address);
    this.ciudad = "Bogota";
    this.direccion = address;
    this.identificador = "1";

    this.info = [{"ciudad":this.ciudad, "direccion":this.direccion, "identificador":this.identificador}];

    console.log(this.info);
    this._servinformacionService.getServiLocalidad(this.info).subscribe(
      response => {
        console.log(response);
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

  onSubmit(){
    console.log(this.template);
    /*
    this._templateService.addTemplate(this.token, this.template).subscribe(
      response => {
        if (!response.template) {
            this.alertMessage = '¡Error en el servidor!';
        }else{
            this.alertMessage = '¡La planilla fue creada correctamente!';
            this.template = response.template;
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
    */
  }
}
