import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../modelo/Estudiante';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.scss']
})
export class ListarEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEstudiantes()
    .subscribe(data=>{
      this.estudiantes=data;
    })
  }

}
