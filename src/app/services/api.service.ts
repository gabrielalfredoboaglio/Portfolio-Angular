import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Credentials } from '../models/cred';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(creds: Credentials) {
    return this.http
      .post('https://portfolioback-ah2t.onrender.com', creds, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const header = response.headers;

          const bearerToken = header.get('Authorization')!;
          const token = bearerToken.replace('Bearer ', '');

          localStorage.setItem('token', token);

          return body;
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
