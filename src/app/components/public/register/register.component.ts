import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class RegisterComponent {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private httpClient: HttpClient) { }
}
