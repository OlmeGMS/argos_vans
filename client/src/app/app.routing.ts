import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import user
import { HomeComponent } from './components/home.component';
import { UserTableComponent } from './components/user-table.component';
import { UserAddComponent } from './components/user-add.component';
import { UserEditComponent } from './components/user-edit.component';

// import roles
import { RolListComponent } from './components/rol-list.component';
import { RolAddComponent } from './components/rol-add.component';
import { RolEditComponent } from './components/rol-edit.component';

// import cities
import { CityTableComponent } from './components/city-table.component';
import { CityAddComponent } from './components/city-add.component';
import { CityEditComponent } from './components/city-edit.component';

// import Location
import { LocationTableComponent } from './components/location-table.component';
import { LocationAddComponent } from './components/location-add.component';
import { LocationEditComponent } from './components/location-edit.component';

// import costCenter
import { CostCenterTableComponent } from './components/cost-center-table.component';
import { CostCenterAddComponent } from './components/cost-center-add.component';

// import car
import { CarAddComponent } from './components/car-add.component';
import { CarTableComponent } from './components/car-table.component';
import { CarEditComponent } from './components/car-edit.component';

// import rate
import { RateTableComponent } from './components/rate-table.component';
import { RateAddComponent } from './components/rate-add.component';
import { RateEditComponent } from './components/rate-edit.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'usuarios', component: UserTableComponent},
  {path: 'crear-usuario', component: UserAddComponent},
  {path: 'roles', component: RolListComponent},
  {path: 'crear-rol', component: RolAddComponent},
  {path: 'editar-rol/:id', component: RolEditComponent},
  {path: 'ciudades', component: CityTableComponent},
  {path: 'crear-ciudad', component: CityAddComponent},
  {path: 'editar-ciudad/:id', component: CityEditComponent},
  {path: 'localidades', component: LocationTableComponent},
  {path: 'crear-localidad', component: LocationAddComponent},
  {path: 'editar-localidad/:id', component: LocationEditComponent},
  {path: 'centros', component: CostCenterTableComponent},
  {path: 'crear-centro', component: CostCenterAddComponent},
  {path: 'vehiculos', component: CarTableComponent},
  {path: 'crear-vehiculo', component: CarAddComponent},
  {path: 'editar-vehiculo/:id', component: CarEditComponent},
  {path: 'tarifas', component: RateTableComponent},
  {path: 'crear-tarifa', component: RateAddComponent},
  {path: 'editar-tarifa/:id', component: RateEditComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
