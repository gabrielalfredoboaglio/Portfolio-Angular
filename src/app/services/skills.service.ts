import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBackendUrl } from '../constant';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skill/all`);
  }
  public addSkill(skill: Skill): Observable<Skill> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);
    return this.http.post<Skill>(`${this.apiServerUrl}/api/skill/add`, skill, {
      headers: headers,
    });
  }

  public updateSkill(skill: Skill): Observable<Skill> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);
    return this.http.put<Skill>(
      `${this.apiServerUrl}/api/skill/update`,
      skill,
      {
        headers: headers,
      }
    );
  }
  public deleteSkill(skillId: number): Observable<void> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.autenticacionService.token}`);

    return this.http.delete<void>(
      `${this.apiServerUrl}/api/skill/delete/${skillId}`,
      {
        headers: headers,
      }
    );
  }
}
