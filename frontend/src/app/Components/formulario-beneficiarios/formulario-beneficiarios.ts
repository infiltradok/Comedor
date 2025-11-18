import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-beneficiarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-beneficiarios.html',
  styleUrls: ['./formulario-beneficiarios.css']
})
export class FormularioBeneficiariosComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  guardar() {
    console.log(this.formulario.value);
  }
}

