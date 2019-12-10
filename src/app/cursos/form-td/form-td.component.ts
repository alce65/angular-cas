import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'cas-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  cursos: Array<MaestroDatos>;
  turnos: Array<MaestroDatos>;
  alumno: AlumnoModel;
  @ViewChild('formRef', {static: true}) formCurso: NgForm;

  constructor() { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.alumno = new AlumnoModel();
    console.dir(this.formCurso);
  }

  onSubmit() {
    console.log('Enviando', this.alumno);
    console.log(this.formCurso)
    // TODO Enviar ralmente datos
  }

}
