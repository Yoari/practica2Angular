import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) {}
    form = new FormGroup({
      nombre: new FormControl(''),
      password: new FormControl(''),
    });

  ngOnInit(): void {
  }
  guardarUsuario(){
    console.log('Registro Guardado');
  }

}
