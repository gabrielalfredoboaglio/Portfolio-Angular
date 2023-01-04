import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../models/cred';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  creds: Credentials = {
    email: '',
    password: '',
  };
  constructor(private apiService: ApiService, private router: Router) {}

  login(form: NgForm) {
    console.log('form value', form.value);
    this.apiService.login(this.creds).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
}
