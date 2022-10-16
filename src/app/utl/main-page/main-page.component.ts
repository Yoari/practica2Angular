import { Component} from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
interface AlumnosUtl{
  nombre: string,
  edad: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  alumnosUtl:AlumnosUtl[]=[
    {
      nombre: 'Mario',
      edad: 15
    },
    {
      nombre: 'Lucia',
      edad: 21
    },
    {
      nombre: 'Leonardo',
      edad: 21
    },
    {
      nombre: 'Diana',
      edad: 21
    }
  ]
  regAlumnos:AlumnosUtl={
    nombre:'',
    edad : 0
  }
  agregar(){
    //console.log(this.regAlumnos)
    this.alumnosUtl.push (this.regAlumnos)
    this.regAlumnos={
      nombre:'',
      edad:0
    }
  }
}
