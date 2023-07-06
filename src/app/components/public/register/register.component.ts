import { Component } from '@angular/core';
import { Register } from 'src/app/interface/login';
import { ApiService as registerService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { environment } from 'env';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class RegisterComponent {
  register: Register = { name: '', email: '', password: '' };
  error!: string|null;

  constructor(private registerService: registerService, private router: Router) { }

  EnvioDatos() {
    console.log("enviar datos");
    this.registerService.register(this.register).subscribe(
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
