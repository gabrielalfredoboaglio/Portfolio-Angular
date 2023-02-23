import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public autenticacionService: AutenticacionService) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.autenticacionService.cerrarSesion();
  }
}
