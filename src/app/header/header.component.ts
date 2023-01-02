import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Header } from '../models/header';
import { InfoService } from '../servicios/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public header: Header | undefined;
  public editHeader: Header | undefined;
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  public getInfo(): void {
    this.infoService.getInfo().subscribe({
      next: (response: Header) => {
        this.header = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  //Modal Header
  public onOpenModal(mode: string, header?: Header): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#editHeaderUsuarioModal');

    container?.appendChild(button);
    button.click();
  }

  public onUpdateHeader(header: Header): void {
    this.editHeader = header;
    this.infoService.updateInfo(header).subscribe({
      next: (response: Header) => {
        console.log(response);
        this.getInfo();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }
}
