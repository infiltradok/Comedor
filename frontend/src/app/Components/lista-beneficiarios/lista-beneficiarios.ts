import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-beneficiarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-beneficiarios.html',
  styleUrls: ['./lista-beneficiarios.css']
})
export class ListaBeneficiarios {

  lista: any[] = [];

  totalDonado: number = 0;
  totalDonantes: number = 0;
  mayorDonacion: number = 0;

  private apiUrl = 'http://127.0.0.1:8000/donaciones';

  constructor(private http: HttpClient) {
    this.cargarDonaciones();
  }

  cargarDonaciones() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.lista = data;

      this.totalDonantes = data.length;
      this.totalDonado = data.reduce((acc, d) => acc + d.monto, 0);
      this.mayorDonacion = Math.max(...data.map(d => d.monto), 0);
    });
  }

  eliminar(id: number) {
    console.log("Eliminar", id);
  }
}


