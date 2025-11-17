import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../models/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariosService {

  private API_URL = 'http://localhost:8000/beneficiarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.API_URL);
  }

  crear(data: Beneficiario): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(this.API_URL, data);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
