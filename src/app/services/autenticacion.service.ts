import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post<any>(this.url, credenciales).pipe(retry(1));

    /* const result = this.http.post(this.url, credenciales);
    console.log(result);
    return result;
    .pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );*/
  }
  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
