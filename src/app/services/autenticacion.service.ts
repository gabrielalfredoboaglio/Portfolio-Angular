import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { apiBackendUrl } from '../constant';
@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  url = apiBackendUrl + '/login';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(credenciales: any) {
    return this.http
      .post<any>(this.url, credenciales, {
        observe: 'response',
      })
      .subscribe((data) => {
        const token = data.body.token;
        if (token) {
          localStorage.setItem('token', token);
        } else {
        }
      });
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
