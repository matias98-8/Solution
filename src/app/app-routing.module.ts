import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './Screens/registrar/registrar.component';
import {InicioComponent} from './Screens/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component:InicioComponent},
  { path: 'registrar', component: RegistrarComponent },
  { path: '**', redirectTo: '/inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
