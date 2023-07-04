import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

interface LoginResponse {
  token: string;
  user: string;
  // otras propiedades si las hay
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private apiService: ApiService) { }

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.apiService.login(credentials).subscribe(
      
    );
  }
}
