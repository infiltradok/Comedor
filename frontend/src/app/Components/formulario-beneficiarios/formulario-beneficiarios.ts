import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeneficiariosService } from '../../services/beneficiarios';
import { Beneficiario } from '../../models/beneficiario';

@Component({
  selector: 'app-formulario-beneficiarios',
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
    if (this.formulario.valid) {
      const beneficiario: Beneficiario = this.formulario.value;

      this.beneficiariosService.crear(beneficiario).subscribe({
        next: () => {
          alert('Beneficiario registrado correctamente');
          this.formulario.reset();
        },
        error: (err) => console.error(err)
      });
    }
  }
}

