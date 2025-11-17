import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// COMPONENTES
import { ListaBeneficiarios } from './Components/lista-beneficiarios/lista-beneficiarios';
import { FormularioBeneficiarios } from './Components/formulario-beneficiarios/formulario-beneficiarios';
import { Navbar } from './Components/shared/navbar/navbar';
import { Inicio } from './Components/inicio/inicio';
import { Sobre } from './Components/sobre/sobre';
import { Historia } from './Components/historia/historia';
import { Servicios } from './Components/servicios/servicios';
import { Contacto } from './Components/contacto/contacto';

@NgModule({
  declarations: [
    App,
    ListaBeneficiarios,
    FormularioBeneficiarios,
    Navbar,
    Inicio,
    Sobre,
    Historia,
    Servicios,
    Contacto
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],

  providers: [],
  bootstrap: [App]
})
export class AppModule {}
