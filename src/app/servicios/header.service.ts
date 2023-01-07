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
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/api/id/1`);
  }

  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.apiServerUrl}/usuario/api/update`,
      usuario
    );
  }
}
