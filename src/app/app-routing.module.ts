import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './Screens/registrar/registrar.component';
import { InicioComponent } from './Screens/inicio/inicio.component';
import { InicioClienteComponent } from './Screens/UsuarioCliente/inicio-cliente/inicio-cliente.component';
import { CasoDevolucionComponent } from './Screens/UsuarioCliente/caso-devolucion/caso-devolucion.component';
import { InicioTiendaComponent } from './Screens/UsuarioTienda/inicio-tienda/inicio-tienda.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component:InicioComponent},
  { path: 'registrar', component: RegistrarComponent },
  
  //inicio en cliente
  { path: 'InicioCliente', component: InicioClienteComponent },
  { path: 'InicioCliente/CasoDevolución', component: CasoDevolucionComponent },
  { path: 'Inicio', component: InicioClienteComponent },
  { path: 'InicioTienda', component: InicioTiendaComponent },
  { path: '**', redirectTo: '/inicio' }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
      
}
