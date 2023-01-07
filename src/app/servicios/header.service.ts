import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private apiServerUrl = 'https://portfolioback-ah2t.onrender.com';
  constructor(private http: HttpClient) {}

  public getUser(): Observable<Usuario> {
<<<<<<< HEAD
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/api/id/1`);
=======
    return this.http.get<Usuario>(`${this.apiServerUrl}/api/usuario/id/1`);
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
  }

  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
<<<<<<< HEAD
      `${this.apiServerUrl}/usuario/api/update`,
=======
      `${this.apiServerUrl}/api/usuario/update`,
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
      usuario
    );
  }
}
