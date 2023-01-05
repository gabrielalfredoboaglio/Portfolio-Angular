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
  public editUsuario: Usuario | undefined;
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
  //Modal Usuario
  public onOpenModal(mode: string, usuario?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#editPerfilUsuarioModal');

    container?.appendChild(button);
    button.click();
  }
  public onUpdateUsuario(usuario: Usuario): void {
    this.editUsuario = usuario;
    this.headerService.updateUsuario(usuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUser();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }
}
