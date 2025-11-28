import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { CellPhone } from '../models/cellphone.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Person APIs
  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/persons`);
  }

  getPersonById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/persons/${id}`);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/persons`, person);
  }

  updatePerson(id: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/persons/${id}`, person);
  }

  deletePerson(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/persons/${id}`);
  }

  // CellPhone APIs
  getAllCellPhones(): Observable<CellPhone[]> {
    return this.http.get<CellPhone[]>(`${this.baseUrl}/cellphones`);
  }

  getCellPhoneById(id: string): Observable<CellPhone> {
    return this.http.get<CellPhone>(`${this.baseUrl}/cellphones/${id}`);
  }

  createCellPhone(cellPhone: CellPhone): Observable<CellPhone> {
    return this.http.post<CellPhone>(`${this.baseUrl}/cellphones`, cellPhone);
  }

  updateCellPhone(id: string, cellPhone: CellPhone): Observable<CellPhone> {
    return this.http.put<CellPhone>(`${this.baseUrl}/cellphones/${id}`, cellPhone);
  }

  deleteCellPhone(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/cellphones/${id}`);
  }
}
