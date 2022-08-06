import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoAngular';

  constructor(private router:Router){
  }

  listarEstudiantes(){
    this.router.navigate(["listarEstudiantes"]);
  }
  
  agregarEstudiante(){
    this.router.navigate(["agregarEstudiantes"]);
  }
}
