import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './Components/inicio/inicio';
import { Sobre } from './Components/sobre/sobre';
import { Historia } from './Components/historia/historia';
import { Servicios } from './Components/servicios/servicios';
import { Contacto } from './Components/contacto/contacto';


const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'sobre', component: Sobre },
  { path: 'historia', component: Historia },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
