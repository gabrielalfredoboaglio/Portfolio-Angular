import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Education } from '../../models/education';
import { Experiencia } from '../../models/experiencia';
import { EducationService } from '../../services/education.service';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-miexperiencia',
  templateUrl: './miexperiencia.component.html',
  styleUrls: ['./miexperiencia.component.css'],
})
export class MiexperienciaComponent implements OnInit {
  public educations: Education[] = [];
  public editEducation: Education | undefined;
  public deleteEducation: Education | undefined;
  public experiencias: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined;
  public deleteExperiencia: Experiencia | undefined;

  constructor(
    private educationService: EducationService,
    private experienciaService: ExperienciaService,
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit(): void {
    this.getEducations();
    this.getExperiencias();
  }

  public getEducations(): void {
    this.educationService.getEducation().subscribe({
      next: (Response: Education[]) => {
        this.educations = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public getExperiencias(): void {
    this.experienciaService.getExperiencia().subscribe({
      next: (Response: Experiencia[]) => {
        this.experiencias = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  // modal ts educacion
  public onOpenModal(mode: String, education?: Education): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducationModal');
    } else if (mode === 'delete') {
      this.deleteEducation = education;
      button.setAttribute('data-target', '#deleteEducationModal');
    } else if (mode === 'edit') {
      this.editEducation = education;
      button.setAttribute('data-target', '#editEducationModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEducation(addForm: NgForm): void {
    document.getElementById('add-education-form')?.click();
    this.educationService.addEducation(addForm.value).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.getEducations();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateEducation(education: Education) {
    this.editEducation = education;

    this.educationService.updateEducation(education).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.getEducations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteEducation(idEdu: number): void {
    this.educationService.deleteEducation(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  //modal ts experiencia
  public onOpenModalExp(mode: String, experiencia?: Experiencia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienciaModal');
    } else if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    } else if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#editExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddExperiencia(addForm: NgForm): void {
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.getExperiencias();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateExperiencia(experiencia: Experiencia): void {
    this.editExperiencia = experiencia;

    this.experienciaService.updateExperiencia(experiencia).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.getExperiencias();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteExperiencia(idExp: number): void {
    this.experienciaService.deleteExperiencia(idExp).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getExperiencias();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
