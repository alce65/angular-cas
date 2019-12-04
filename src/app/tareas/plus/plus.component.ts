import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'cas-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  storeKey: string;
  openConfirmar: boolean;
  nodoModal: any;

  constructor() { }

  ngOnInit() {
    this.storeKey = 'tareas';
    this.tareas = JSON.parse(localStorage.getItem(this.storeKey)) || [];
    this.openConfirmar = false;
  }

  onAddTarea(tarea: TareaModel) {
    this.tareas.push({...tarea});
    console.log(this.tareas);
    this.actualizarStore();
  }

  onDeleteTarea(i: number) {
    this.tareas.splice(i, 1);
    this.actualizarStore();
  }

  onCheckedTarea(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    this.actualizarStore();
  }

  onDeleteConfirmar() {
    // open modal
    this.openConfirmar = true;
  }

  onDeleteAll(del: boolean) {
    if (del) {
      this.tareas = [];
      localStorage.removeItem(this.storeKey);
    }
    // close modal
    this.openConfirmar = false;
  }

  private actualizarStore() {
    localStorage.setItem(this.storeKey,
      JSON.stringify(this.tareas));
  }
}
