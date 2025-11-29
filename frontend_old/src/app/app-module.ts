import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

// COMPONENTES
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
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




