import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaBeneficiariosComponent } from './Components/lista-beneficiarios/lista-beneficiarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaBeneficiariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }