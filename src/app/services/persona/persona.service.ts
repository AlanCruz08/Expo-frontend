import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interface/persona';
import { environment } from 'env';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ "Accept": "application/json", "Authorization": `Bearer ${token}` });
    return this.http.get<Persona[]>(`${this.apiUrl}/`, { headers });
  }

  getPersona(id: number): Observable<Persona> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ "Accept": "application/json", "Authorization": `Bearer ${token}` });
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Persona>(url, { headers });
  }

  createPersona(persona: Persona): Observable<Persona> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ "Accept": "application/json", "Authorization": `Bearer ${token}` });
    const url = `${this.apiUrl}/`;
    return this.http.post<Persona>(url, persona, { headers });
  }

  updatePersona(id: number, persona: Persona): Observable<Persona> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ "Accept": "application/json", "Authorization": `Bearer ${token}` });
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Persona>(url, persona, { headers });
  }

  deletePersona(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ "Accept": "application/json", "Authorization": `Bearer ${token}` });
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, { headers });
  }
}
