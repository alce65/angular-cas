import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cas-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.css']
})
export class SaludoRxComponent implements OnInit {
  msg: string;
  fcNombre: FormControl;

  constructor() { }

  ngOnInit() {
    this.fcNombre = new FormControl();
    this.fcNombre.setValue('amigo')
    this.msg = 'Pulsa aqui para borrar';
    console.log(this.fcNombre);
  }

  onBorrar(ev: Event) {
    this.fcNombre.reset();
  }
}
