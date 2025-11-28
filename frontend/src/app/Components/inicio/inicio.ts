import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {

  metaDonacion: number = 500;      // ✅ META DEL MES
  totalRecaudado: number = 280;    // ✅ TOTAL ACTUAL
  porcentaje: number = 0;

  ngOnInit() {
    this.calcularPorcentaje();
  }

  calcularPorcentaje() {
    this.porcentaje = Math.round(
      (this.totalRecaudado / this.metaDonacion) * 100
    );

    if (this.porcentaje > 100) {
      this.porcentaje = 100;
    }
  }

}
