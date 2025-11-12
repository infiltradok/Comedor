import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BackendOverviewComponent } from './Components/backend-overview/backend-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/backend', pathMatch: 'full' },
 // { path: 'backend', component: BackendOverviewComponent },
  { path: '', redirectTo: 'beneficiarios', pathMatch: 'full' },
  //{ path: 'beneficiarios', component: ListaBeneficiariosComponent },
 // { path: 'nuevo', component: FormularioBeneficiariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


