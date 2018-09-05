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
import { UserEditComponent } from './components/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SildebarComponent,
    TemplateHeaderComponent,
    FooterComponent,
    HomeComponent,
    UserEditComponent
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
