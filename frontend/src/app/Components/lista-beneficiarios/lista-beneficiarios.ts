import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-beneficiarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-beneficiarios.html',
  styleUrls: ['./lista-beneficiarios.css']
})
export class ListaBeneficiarios {
  lista: any[] = [];

  eliminar(id: number) {
    console.log("Eliminar", id);
  }
}
