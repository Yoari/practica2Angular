import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interfaces';
@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:15,
    },
    {
      nombre:'Lucia',
      edad:22,
    },
    {
      nombre:'Leo',
      edad:21,
    },
    {
      nombre:'Littzy',
      edad:21,
    },
  ]

  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl];
  }


  constructor() { }
 
  agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }
}