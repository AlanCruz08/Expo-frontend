import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

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
