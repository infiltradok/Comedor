import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Inicio } from './Components/inicio/inicio';
import { FormularioBeneficiariosComponent } from './Components/formulario-beneficiarios/formulario-beneficiarios';
import { ListaBeneficiariosComponent } from './Components/lista-beneficiarios/lista-beneficiarios';

const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'registrar', component: FormularioBeneficiariosComponent },
  { path: 'lista', component: ListaBeneficiariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
