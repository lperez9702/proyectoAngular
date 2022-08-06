import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Estudiante } from '../modelo/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Url = 'http://localhost:8585/estudiante/';

  constructor(private http:HttpClient) { 

  }

  getEstudiantes(){
    return this.http.get<Estudiante[]>(this.Url);
  }

  guardarEstudiante(estudiante:Estudiante){
    return this.http.post<Estudiante>(this.Url, estudiante)
  }
}
