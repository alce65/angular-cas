import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cas-by-google',
  templateUrl: './by-google.component.html',
  styleUrls: ['./by-google.component.css']
})
export class ByGoogleComponent implements OnInit {
  fcClave: FormControl;
  libros: Array<LibroModel>;
  clave: string;
  urlBase: string;
  constructor() { }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = [];
    this.urlBase  = environment.urlLibros;
  }

  onBuscar() {}

}
