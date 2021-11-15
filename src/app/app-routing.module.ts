import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './Screens/registrar/registrar.component';
import { InicioComponent } from './Screens/inicio/inicio.component';
import { InicioClienteComponent } from './UsuarioCliente/inicio-cliente/inicio-cliente.component';
import { CasoDevolucionComponent } from './UsuarioCliente/caso-devolucion/caso-devolucion.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component:InicioComponent},
  { path: 'registrar', component: RegistrarComponent },
  //{ path: '**', redirectTo: '/inicio' },
  //inicio en cliente
  { path: 'InicioCliente', component: InicioClienteComponent },
  { path: 'InicioCliente/CasoDevolución', component: CasoDevolucionComponent }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
      
}
