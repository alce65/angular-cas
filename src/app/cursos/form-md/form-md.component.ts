import { Component, OnInit } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cas-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;
  alumno: AlumnoModel;
  formCurso: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.turnos = TURNOS;
    this.cursos = CURSOS;
    this.formCurso = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: [],
      dni: [],
      passwd: [],
      email: [],
      coments: [],
      nacim: [],
      isOk: [false],
      turno: [null] ,
      curso: [null]
    })
  }

  onSubmit() {
    this.alumno = this.formCurso.value;
    console.log(this.alumno);
    // TODO Enviar los datos
  }

}
