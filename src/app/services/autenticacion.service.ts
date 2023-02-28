import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { apiBackendUrl } from '../constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  url = environment.apiBaseUrl + '/login';
  currentUserSubject: BehaviorSubject<any>;
  private isAuthenticatedValue = false;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

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
          this.setAuthenticated(true);
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

  public isAuthenticated(): boolean {
    // Lógica para verificar si el usuario está autenticado

    return this.isAuthenticatedValue;
  }

  public setAuthenticated(value: boolean): void {
    this.isAuthenticatedValue = value;
  }

  public cerrarSesion(): void {
    localStorage.removeItem('token');
    this.setAuthenticated(false);
  }
  public getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
