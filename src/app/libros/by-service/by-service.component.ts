import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { GoogleLibrosService } from 'src/app/services/google-libros.service';

@Component({
  selector: 'cas-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.css']
})
export class ByServiceComponent implements OnInit {
  fcClave: FormControl;
  libros: Array<LibroModel>;
  clave: string;

  constructor(private google: GoogleLibrosService) { }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = [];
  }

  onBuscar() {
    if (!this.fcClave.value) {
      return;
    }
    this.clave = this.fcClave.value;
    this.fcClave.reset();
    this.google.buscarTitulo(this.clave).then(
      data => this.libros = data
    );
  }

  onBuscarRx() {
    if (!this.fcClave.value) {
      return;
    }
    this.clave = this.fcClave.value;
    this.fcClave.reset();
    this.google.buscarTituloRx(this.clave).subscribe(
      data => this.libros = data
    );

  }

}
