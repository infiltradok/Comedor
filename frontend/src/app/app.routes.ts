import { Routes } from '@angular/router';

import { Inicio } from './Components/inicio/inicio';
import { FormularioBeneficiariosComponent } from './Components/formulario-beneficiarios/formulario-beneficiarios';
import { ListaBeneficiarios } from './Components/lista-beneficiarios/lista-beneficiarios';
import { Sobre } from './Components/sobre/sobre';
import { Historia } from './Components/historia/historia';
import { ServiciosComponent } from './Components/servicios/servicios';
import { Contacto } from './Components/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'registrar', component: FormularioBeneficiariosComponent },
  { path: 'lista', component: ListaBeneficiarios },
  { path: 'sobre', component: Sobre },
  { path: 'historia', component: Historia },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: Contacto }
];
