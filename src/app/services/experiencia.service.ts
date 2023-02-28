import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiBackendUrl } from '../constant';
import { Experiencia } from '../models/experiencia';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(
      `${this.apiServerUrl}/api/experiencia/all`
    );
  }
  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.post<Experiencia>(
      `${this.apiServerUrl}/api/experiencia/add`,
      experiencia,
      { headers: headers }
    );
  }
  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.put<Experiencia>(
      `${this.apiServerUrl}/api/experiencia/update`,
      experiencia,
      { headers: headers }
    );
  }

  public deleteExperiencia(experienciaId: number): Observable<void> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.delete<void>(
      `${this.apiServerUrl}/api/experiencia/delete/${experienciaId}`,
      { headers: headers }
    );
  }
}
