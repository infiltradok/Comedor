import { Component, OnInit } from '@angular/core';
import { BeneficiariosService } from '../../services/beneficiarios';
import { Beneficiario } from '../../models/beneficiario';

@Component({
  selector: 'app-lista-beneficiarios',
  templateUrl: './lista-beneficiarios.html',
  styleUrls: ['./lista-beneficiarios.css']
})
export class ListaBeneficiariosComponent implements OnInit {

  lista: Beneficiario[] = [];

  constructor(private beneficiariosService: BeneficiariosService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.beneficiariosService.listar().subscribe({
      next: data => this.lista = data,
      error: err => console.log(err)
    });
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar beneficiario?')) {
      this.beneficiariosService.eliminar(id).subscribe(() => {
        this.cargar();
      });
    }
  }
}
