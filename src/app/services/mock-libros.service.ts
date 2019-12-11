import { Injectable } from '@angular/core';
import { LIBROS } from '../models/libros.data';
import { LibroModel } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class MockLibrosService {

  constructor() { }

  getTitulo(clave: string): Array<LibroModel> {
    if (clave) {
      return LIBROS;
    }
  }

  getPromise(clave: string): Promise<Array<LibroModel>> {
    if (!clave) {
      return;
    }
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(LIBROS);
      }, 2000);
    });
  }


}

