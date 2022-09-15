import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { HeaderComponent } from './header/header.component';
import { MIperfilComponent } from './miperfil/miperfil.component';
import { MiexperienciaComponent } from './miexperiencia/miexperiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ContactoComponent } from './contacto/contacto.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HeaderComponent,
    MIperfilComponent,
    MiexperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ErrorComponent,
    ContactoComponent,
    IndexComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
