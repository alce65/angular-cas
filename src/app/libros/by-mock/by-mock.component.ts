import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { MockLibrosService } from 'src/app/services/mock-libros.service';

@Component({
  selector: 'cas-by-mock',
  templateUrl: './by-mock.component.html',
  styleUrls: ['./by-mock.component.css']
})
export class ByMockComponent implements OnInit {
  fcClave: FormControl;
  libros: Array<LibroModel>;
  clave: string;

  constructor(private mockLibrosService: MockLibrosService) { }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = [];
  }

  onBuscar() {
    if (this.fcClave.value) {
      this.clave = this.fcClave.value;
      this.libros = this.mockLibrosService.getTitulo(this.clave);
      this.fcClave.reset()
    }
  }

  onBuscarPromise() {
    if (this.fcClave.value) {
      this.clave = this.fcClave.value;
      this.mockLibrosService.getPromise(this.clave).then(
        (data: Array<LibroModel>) => {
          this.libros = data;
        }
      );
      this.fcClave.reset();
    }
  }
}

