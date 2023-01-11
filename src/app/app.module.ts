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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IniciarSessionComponent } from './iniciar-session/iniciar-session.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InterceptorService } from './servicios/interceptor.service';

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
    IniciarSessionComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
