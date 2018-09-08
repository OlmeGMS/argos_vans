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
import { UserEditComponent } from './components/user-edit.component';
import { RolListComponent } from './components/rol-list.component';
import { RolAddComponent } from './components/rol-add.component';
import { RolEditComponent } from './components/rol-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SildebarComponent,
    TemplateHeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTableComponent,
    UserEditComponent,
    RolListComponent,
    RolAddComponent,
    RolEditComponent

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
