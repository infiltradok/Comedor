import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaBeneficiarios } from './Components/lista-beneficiarios/lista-beneficiarios';
import { FormularioBeneficiarios } from './Components/formulario-beneficiarios/formulario-beneficiarios';
//import { BackendOverview } from './components/backend-overview/backend-overview';

@NgModule({
  declarations: [
    App,
    ListaBeneficiarios,
    FormularioBeneficiarios,
    //BackendOverview
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
