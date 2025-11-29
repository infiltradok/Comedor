import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BeneficiariosService } from '../../services/beneficiarios';

@Component({
  selector: 'app-formulario-beneficiarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-beneficiarios.html',
  styleUrls: ['./formulario-beneficiarios.css']
})
export class FormularioBeneficiariosComponent {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private beneficiariosService: BeneficiariosService
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  guardar() {
    if (this.formulario.invalid) return;

    const datos = this.formulario.value;

    this.beneficiariosService.crear(datos).subscribe({
      next: (resp) => {
        alert('Beneficiario registrado con éxito');
        console.log(resp);
      },
      error: (err) => {
        console.error(err);
        alert('Error al registrar');
      }
    });
  }
}


