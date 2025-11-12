import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../models/beneficiario.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {
  private apiUrl = 'http://127.0.0.1:8000/beneficiarios';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.apiUrl);
  }

  create(b: Beneficiario): Observable<any> {
    return this.http.post(this.apiUrl, b);
  }

  update(id: number, b: Beneficiario): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, b);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
