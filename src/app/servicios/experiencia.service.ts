import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private apiServerUrl = 'https://portfolioback-ah2t.onrender.com';
  constructor(private http: HttpClient) {}

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(
<<<<<<< HEAD
      `${this.apiServerUrl}/experiencia/api/all`
=======
      `${this.apiServerUrl}/api/experiencia/all`
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
    );
  }
  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(
<<<<<<< HEAD
      `${this.apiServerUrl}/experiencia/api/add`,
=======
      `${this.apiServerUrl}/api/experiencia/add`,
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
      experiencia
    );
  }
  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(
<<<<<<< HEAD
      `${this.apiServerUrl}/experiencia/api/update`,
=======
      `${this.apiServerUrl}/api/experiencia/update`,
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
      experiencia
    );
  }
  public deleteExperiencia(experienciaId: number): Observable<void> {
    return this.http.delete<void>(
<<<<<<< HEAD
      `${this.apiServerUrl}/experiencia/api/delete/${experienciaId}`
=======
      `${this.apiServerUrl}/api/experiencia/delete/${experienciaId}`
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
    );
  }
}
