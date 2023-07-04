import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:HttpHeaders;
  private apiUrl = 'http://127.0.0.1:8000/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({"Accept": "application/json", "Authorization":"Bearer hi"});
   }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  setAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

}
