import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEstudianteComponent } from './estudiante/agregar-estudiante/agregar-estudiante.component';
import { ListarEstudiantesComponent } from './estudiante/listar-estudiantes/listar-estudiantes.component';
import {FormsModule} from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEstudianteComponent,
    ListarEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ], 
  providers: [ServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }