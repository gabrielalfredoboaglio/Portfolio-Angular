import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiBackendUrl } from '../constant';
import { Header } from '../models/header';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getInfo(): Observable<Header> {
    return this.http.get<Header>(`${this.apiServerUrl}/api/header/id/1`);
  }

  public updateInfo(header: Header): Observable<Header> {
    return this.http.put<Header>(
      `${this.apiServerUrl}/api/header/update`,
      header
    );
  }
}
