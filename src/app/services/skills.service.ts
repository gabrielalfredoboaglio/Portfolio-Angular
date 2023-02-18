import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiServerUrl = 'https://portfolioback-ah2t.onrender.com';

  constructor(private http: HttpClient) {}

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skill/all`);
  }
  public addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiServerUrl}/api/skill/add`, skill);
  }

  public updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiServerUrl}/api/skill/update`, skill);
  }
  public deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/skill/delete${skillId}`
    );
  }
}
