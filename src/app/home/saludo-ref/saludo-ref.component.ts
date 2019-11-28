import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cas-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('refNombre', {static: true}) nombre: ElementRef;
  constructor() {
  }

  ngOnInit() {
    console.dir(this.nombre.nativeElement);
  }

}
