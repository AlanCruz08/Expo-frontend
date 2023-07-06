import { Component } from '@angular/core';
import { Login} from 'src/app/interface/login';
import { ApiService as loginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { environment } from 'env';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = { email: '', password: '' };
  error!: string|null;

  constructor(private loginService: loginService, private router: Router) { }

  EnvioDatos() {
    console.log("enviar datos");
    this.loginService.login(this.login).subscribe(
      (response: any) => {
        this.error = null;
        const token = response.access_token;
        localStorage.setItem('token', token);
        window.location.href = environment.webUrl + '/dashboard';
      },
      error => {
        if (error && error.error && error.error.status === 'error') {
          this.error = error.error.message;
        } else {
          this.error = 'Error desconocido';
        }
      }
    );
  }

}
