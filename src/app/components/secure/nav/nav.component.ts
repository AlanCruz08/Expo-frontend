import { Component } from '@angular/core';
import { ApiService as logoutService } from 'src/app/services/login/login.service';
import { Token } from 'src/app/interface/login';
import { environment } from 'env';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  token = localStorage.getItem('token');
  error!: string | null;

  constructor(private logoutService: logoutService) { }

  cerrarSesion() {
    if (this.token !== null) {
      this.logoutService.logout({ access_token: this.token }).subscribe(
        (response: any) => {
          console.log(response);
          localStorage.removeItem('token');
          window.location.href = environment.webUrl;
        },
        error => {
          localStorage.removeItem('token');
          console.log(this.error = error.error.message);
          window.location.href = environment.errorUrl;
        }
      );
    } else {
      console.log('como puedes hacer eso!')
      window.location.href = environment.webUrl;
    }
  }
}
