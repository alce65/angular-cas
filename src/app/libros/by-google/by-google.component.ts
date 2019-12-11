import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = [];
    this.urlBase  = environment.urlLibros;
  }

  onBuscar() {
    if (!this.fcClave.value) {
      return;
    }
    this.clave = this.fcClave.value;
    this.http.get(this.urlBase + this.fcClave.value).toPromise()
      .then( (response: any) => {
        this.libros =
        response.items.map( item => {
          return new LibroModel(item.id, item.volumeInfo.authors, item.volumeInfo.title);
        });
      })
      .catch( (error) => { console.log(error.message); });
    this.fcClave.reset();
  }

  onBuscarRx() {
    if (!this.fcClave.value) {
      return;
    }
    this.clave = this.fcClave.value;
    this.http.get(this.urlBase + this.fcClave.value).subscribe(
      (response: any) => {
        this.libros =
        response.items.map( item => {
          return new LibroModel(item.id, item.volumeInfo.authors, item.volumeInfo.title);
        });
      });
    this.fcClave.reset();

  }

}
