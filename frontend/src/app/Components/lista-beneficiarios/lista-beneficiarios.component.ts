import { Component, OnInit } from '@angular/core';
import { BeneficiarioService } from '../../services/beneficiario.service';
import { Beneficiario } from '../../models/beneficiario.model';

@Component({
  selector: 'app-lista-beneficiarios',
  templateUrl: './lista-beneficiarios.component.html',
  styleUrls: ['./lista-beneficiarios.component.css']
})
export class ListaBeneficiariosComponent implements OnInit {
  beneficiarios: Beneficiario[] = [];

  constructor(private beneficiarioService: BeneficiarioService) {}

  ngOnInit(): void {
    this.beneficiarioService.listar().subscribe(data => {
      this.beneficiarios = data;
    });
  }
}