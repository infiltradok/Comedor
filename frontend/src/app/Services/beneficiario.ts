import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../models/beneficiario.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  private apiUrl = 'http://localhost:8000/beneficiarios';

  constructor(private http: HttpClient) {}

  obtenerBeneficiarios(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.apiUrl);
  }

  crearBeneficiario(data: Beneficiario): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  eliminarBeneficiario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editarBeneficiario(id: number, data: Beneficiario): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
