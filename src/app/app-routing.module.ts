import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarEstudianteComponent } from './estudiante/agregar-estudiante/agregar-estudiante.component';
import { ListarEstudiantesComponent } from './estudiante/listar-estudiantes/listar-estudiantes.component';

const routes: Routes = [
  { path: 'listarEstudiantes', component: ListarEstudiantesComponent },
  { path: 'agregarEstudiantes', component: AgregarEstudianteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
