import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Header } from '../models/header';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private apiServerUrl = 'https://portfolioback-ah2t.onrender.com';
  constructor(private http: HttpClient) {}

  public getInfo(): Observable<Header> {
<<<<<<< HEAD
    return this.http.get<Header>(`${this.apiServerUrl}/header/api/id/1`);
=======
    return this.http.get<Header>(`${this.apiServerUrl}/api/header/id/1`);
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
  }

  public updateInfo(header: Header): Observable<Header> {
    return this.http.put<Header>(
<<<<<<< HEAD
      `${this.apiServerUrl}/header/api/update`,
=======
      `${this.apiServerUrl}/api/header/update`,
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
      header
    );
  }
}
