import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

import { HeaderService } from '../servicios/header.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css'],
})
export class MiperfilComponent implements OnInit {
  public usuario: Usuario | undefined;

  constructor(private headerService: HeaderService) {}
  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.headerService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
