import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './Screens/inicio/inicio.component';
import { RegistrarComponent } from './Screens/registrar/registrar.component';
import { InicioClienteComponent } from './UsuarioCliente/inicio-cliente/inicio-cliente.component';
import { CasoDevolucionComponent } from './UsuarioCliente/caso-devolucion/caso-devolucion.component';
import { UserService } from './service/user/user.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    InicioClienteComponent,
    CasoDevolucionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
