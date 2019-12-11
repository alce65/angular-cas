import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LibroModel } from '../models/libro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GoogleLibrosService {
  urlBase: string;
  libros: Array<LibroModel>;

  constructor(private http: HttpClient) {
    this.urlBase = environment.urlLibros;
  }

  buscarTitulo(clave: string): Promise<Array<LibroModel>> {
    if (!clave) {
      return;
    }
    return this.http.get(this.urlBase + clave).toPromise()
      .then(
        (data: any) => {
          return data.items.map(
            (item ) => {
              return new LibroModel(item.id, item.volumeInfo.authors, item.volumeInfo.title);
            }
          );
        }
      );
  }

  buscarTituloRx(clave: string): Observable<Array<LibroModel>> {
    if (!clave) {
      return;
    }
    return this.http.get(this.urlBase + clave).pipe(
      map( (data: any) => data.items.map(
        item => new LibroModel(item.id, item.volumeInfo.authors, item.volumeInfo.title)
      ) )
    );
  }
}
