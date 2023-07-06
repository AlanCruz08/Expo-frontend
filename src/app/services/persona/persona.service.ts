import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interface/persona';
import { environment } from 'env';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  headers:HttpHeaders;

  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { this.headers = new HttpHeaders({"Accept": "application/json", "Authorization":"Bearer "}); }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/index`);
  }

  getPersona(id: number): Observable<Persona> {
    const url = `${this.apiUrl}/show/${id}`;
    return this.http.get<Persona>(url);
  }

  createPersona(persona: Persona): Observable<Persona> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Persona>(url, persona);
  }

 
  updatePersona(id: number, persona: Persona): Observable<Persona> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Persona>(url, persona);
  }
  

  deletePersona(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
