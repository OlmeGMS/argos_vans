import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import { SildebarComponent } from './sildebar/sildebar.component';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home.component';
import { UserTableComponent } from './components/user-table.component';
import { UserAddComponent } from './components/user-add.component';
import { UserEditComponent } from './components/user-edit.component';
import { RolListComponent } from './components/rol-list.component';
import { RolAddComponent } from './components/rol-add.component';
import { RolEditComponent } from './components/rol-edit.component';
import { CityTableComponent } from './components/city-table.component';
import { CityAddComponent } from './components/city-add.component';
import { CityEditComponent } from './components/city-edit.component';
import { LocationTableComponent } from './components/location-table.component';
import { LocationAddComponent } from './components/location-add.component';
import { LocationEditComponent } from './components/location-edit.component';
import { CostCenterTableComponent } from './components/cost-center-table.component';
import { CostCenterAddComponent } from './components/cost-center-add.component';
import { CarAddComponent } from './components/car-add.component';
import { CarTableComponent } from './components/car-table.component';
import { CarEditComponent } from './components/car-edit.component';
import { RateTableComponent } from './components/rate-table.component';
import { RateAddComponent } from './components/rate-add.component';
import { RateEditComponent } from './components/rate-edit.component';
import { EmployeeAddComponent } from './components/employee-add.component';
import { EmployeeTableComponent } from './components/employee-table.component';
import { EmployeeTableAdminComponent } from './components/employee-table-admin.component';
import { EmployeeEditComponent } from './components/employee-edit.component';
import { EmployeeDatilComponent } from './components/employee-detail.component';
import { ArlTableComponent } from './components/arl-table.component';
import { ArlAddComponent } from './components/arl-add.component';
import { ArlEditComponent } from './components/arl-edit.component';
import { EpsTableComponent } from './components/eps-table.component';
import { EpsAddComponent } from './components/eps-add.component';
import { EpsEditComponent } from './components/eps-edit.component';
import { DriverTableAdminComponent } from './components/driver-table-admin.component';
import { DriverTableComponent } from './components/driver-table.component';
import { DriverAddComponent } from './components/driver-add.component';
import { DriverEditComponent } from './components/driver-edit.component';
import { DriverDetailComponent } from './components/driver-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    SildebarComponent,
    TemplateHeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTableComponent,
    UserAddComponent,
    UserEditComponent,
    RolListComponent,
    RolAddComponent,
    RolEditComponent,
    CityTableComponent,
    CityAddComponent,
    CityEditComponent,
    LocationTableComponent,
    LocationAddComponent,
    LocationEditComponent,
    CostCenterTableComponent,
    CostCenterAddComponent,
    CarAddComponent,
    CarTableComponent,
    CarEditComponent,
    RateTableComponent,
    RateAddComponent,
    RateEditComponent,
    EmployeeAddComponent,
    EmployeeTableComponent,
    EmployeeTableAdminComponent,
    EmployeeEditComponent,
    EmployeeDatilComponent,
    ArlTableComponent,
    ArlAddComponent,
    ArlEditComponent,
    EpsTableComponent,
    EpsAddComponent,
    EpsEditComponent,
    DriverTableAdminComponent,
    DriverTableComponent,
    DriverAddComponent,
    DriverEditComponent,
    DriverDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
