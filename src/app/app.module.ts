import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HeaderComponent } from './header/header.component';

import { MiexperienciaComponent } from './miexperiencia/miexperiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MiperfilComponent } from './miperfil/miperfil.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    HeaderComponent,
    MiperfilComponent,
    MiexperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
