import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaBeneficiariosComponent } from './Components/lista-beneficiarios/lista-beneficiarios.component';
import { FormularioBeneficiariosComponent } from './Components/formulario-beneficiarios/formulario-beneficiarios.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaBeneficiariosComponent,
    FormularioBeneficiariosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



