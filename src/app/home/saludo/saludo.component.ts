import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  msg: string;
  constructor() { }

  ngOnInit() {
    this.nombre = 'amigo';
    this.msg = 'Pulsa aqui para borrar';
  }

  onBorrar(ev: Event) {
    console.log(ev);
    this.nombre = '';
    console.log('Nombre: ', this.nombre);

  }

}
