import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Donacion {
  id?: number;
  nombre: string;
  apellido: string;
  documento_identidad: string;
  telefono: string;
  correo: string;
  monto: number;
  acepta_terminos: boolean;
  fecha_donacion?: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class ServiciosComponent {

  private apiUrl: string = 'http://127.0.0.1:8000/donaciones';

  donacion: Donacion = {
    nombre: '',
    apellido: '',
    documento_identidad: '',
    telefono: '',
    correo: '',
    monto: 80,
    acepta_terminos: false
  };

  constructor(private http: HttpClient) {}

  crearDonacion(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(this.apiUrl, donacion);
  }

  seleccionarMonto(monto: number): void {
    this.donacion.monto = monto;
  }

  donar(): void {
    if (!this.donacion.acepta_terminos) {
      alert('❌ Debe aceptar los términos y condiciones');
      return;
    }

    this.crearDonacion(this.donacion).subscribe({
      next: () => {
        alert('✅ Donación registrada correctamente');

        this.donacion = {
          nombre: '',
          apellido: '',
          documento_identidad: '',
          telefono: '',
          correo: '',
          monto: 80,
          acepta_terminos: false
        };
      },
      error: (err) => {
        console.error(err);
        alert('❌ Error al registrar');
      }
    });
  }
}
