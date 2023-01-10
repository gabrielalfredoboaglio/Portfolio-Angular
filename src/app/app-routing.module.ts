import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSessionComponent } from './iniciar-session/iniciar-session.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-session', component: IniciarSessionComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
