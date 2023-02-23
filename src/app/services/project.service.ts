import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiBackendUrl } from '../constant';
import { Project } from '../models/project';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiServerUrl = apiBackendUrl;

  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/api/project/all`);
  }
  public addProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.post<Project>(
      `${this.apiServerUrl}/api/project/add`,
      project,
      {
        headers: headers,
      }
    );
  }
  public updateProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);
    return this.http.put<Project>(
      `${this.apiServerUrl}/api/project/update`,
      project,
      {
        headers: headers,
      }
    );
  }
  public deleteProject(projectId: number): Observable<void> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/project/delete/${projectId}`,
      { headers: headers }
    );
  }
}
