import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiBackendUrl } from '../constant';
import { Education } from '../models/education';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiServerUrl = apiBackendUrl;
  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/api/educacion/all`);
  }
  public addEducation(education: Education): Observable<Education> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.post<Education>(
      `${this.apiServerUrl}/api/educacion/add`,
      education,
      { headers: headers }
    );
  }

  public updateEducation(education: Education): Observable<Education> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.put<Education>(
      `${this.apiServerUrl}/api/educacion/update`,
      education,
      { headers: headers }
    );
  }
  public deleteEducation(educationId: number): Observable<void> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/educacion/delete/${educationId}`,
      { headers: headers }
    );
  }
}
