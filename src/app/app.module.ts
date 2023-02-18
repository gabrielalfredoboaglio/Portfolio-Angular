import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

import { HeaderComponent } from './components/layout/header/header.component';

import { MiexperienciaComponent } from './components/miexperiencia/miexperiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MiperfilComponent } from './components/miperfil/miperfil.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IniciarSessionComponent } from './pages/iniciar-session/iniciar-session.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { InterceptorService } from './services/interceptor.service';

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
