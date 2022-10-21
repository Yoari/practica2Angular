import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) {}

  obtenerError(){
    var nom = this.form.get('nombre');
    var pass = this.form.get ('passwor');
    if(nom?.hasError('required')){
      return 'el campo es requerido'
    }
  }

  form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  ngOnInit(): void {
  }
  guardarUsuario(){
    console.log('Registro Guardado');
  }

}
