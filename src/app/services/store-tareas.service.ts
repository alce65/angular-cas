import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class StoreTareasService {
  storeName: string;
  constructor() {
    this.storeName = 'tareas';
  }

  setTareas(tareas: Array<TareaModel>) {
    localStorage.setItem(this.storeName,
      JSON.stringify(tareas));
  }

  getTareas(): Array<TareaModel> {
    let tareas = [];
    const strTareas = localStorage.getItem(this.storeName);
    if (strTareas) {
      tareas = JSON.parse(strTareas);
    }
    return tareas;
  }

  removeTareas() {
    localStorage.removeItem(this.storeName);
  }

}
