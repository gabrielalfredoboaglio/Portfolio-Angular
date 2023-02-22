import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css'],
})
export class IniciarSessionComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get Email() {
    return this.form.get('email')?.value;
  }
  get Password() {
    return this.form.get('password')?.value;
  }

  onEnviar(event: Event) {
    event.preventDefault();

    const result = this.autenticacionService.IniciarSesion(this.form.value);
    console.log(result);
    this.ruta.navigateByUrl('portfolio');
  }
}
