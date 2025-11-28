import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {

  private apiUrl = 'http://127.0.0.1:8000/inscripciones';

  inscripcion = {
    nombre_completo: '',
    correo: '',
    telefono: '',
    tipo_solicitante: '',
    descripcion: ''
  };

  constructor(private http: HttpClient) {}

  enviarSolicitud() {
    this.http.post(this.apiUrl, this.inscripcion).subscribe({
      next: () => {
        alert('✅ Solicitud enviada correctamente');

        this.inscripcion = {
          nombre_completo: '',
          correo: '',
          telefono: '',
          tipo_solicitante: '',
          descripcion: ''
        };
      },
      error: (err) => {
        console.error(err);
        alert('❌ Error al enviar la solicitud');
      }
    });
  }
}
