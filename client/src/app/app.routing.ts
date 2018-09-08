import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import user
import { HomeComponent } from './components/home.component';
import { UserTableComponent } from './components/user-table.component';
import { UserEditComponent } from './components/user-edit.component';

// import roles
import { RolListComponent } from './components/rol-list.component';
import { RolAddComponent } from './components/rol-add.component';
import { RolEditComponent } from './components/rol-edit.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'usuarios', component: UserTableComponent},
  {path: 'roles', component: RolListComponent},
  {path: 'crear-rol', component: RolAddComponent},
  {path: 'editar-rol/:id', component: RolEditComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
