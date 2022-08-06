import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../modelo/Estudiante';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})
export class AgregarEstudianteComponent implements OnInit {

  estudiante:Estudiante | undefined;

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  guardarEstudiante(nombre:String){
    this.estudiante = new Estudiante (1, nombre);
    this.service.guardarEstudiante(this.estudiante)
    .subscribe(data=>{
      alert("Se ha agregado con exito al Estudiante...");
      this.router.navigate(["listarEstudiantes"]);
    })
  }

}
