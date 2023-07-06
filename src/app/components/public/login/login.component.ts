import { Component } from '@angular/core';
import { Login } from 'src/app/interface/login';
import { ApiService as loginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('buttonError', [
      state('default', style({
        transform: 'translateX(0)',
      })),
      state('error', style({
        transform: 'translateY(10px)',
        backgroundColor: 'red'
      })),
      transition('default => error', [
        animate('500ms')
      ]),
      transition('error => default', [
        animate('500ms')
      ])
    ])
  ]
})
export class LoginComponent {
  login: Login = { email: '', password: '' };
  error!: string | null;

  constructor(private loginService: loginService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirigir al usuario a la página principal
      this.router.navigate(['/dashboard']);
    }
  }

  EnvioDatos() {
    this.error = '';
    this.loginService.login(this.login).subscribe(
      (response: any) => {
        this.error = null;
        const token = response.access_token;
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        if (error && error.error && error.error.status === "error") {
          this.error = error.error.message;
        } else {
          this.error = 'Error desconocido';
        }
        setTimeout(() => {
          this.error = null; // Restablecer el valor a null para regresar al estado default
        }, 2000);
      }
    );
  }

}
