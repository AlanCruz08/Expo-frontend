import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Register } from 'src/app/interface/login';
import { environment } from 'env';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  headers: HttpHeaders;

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
  }

  login(credentials: Login) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(credentials: Register) {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  setAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

}
