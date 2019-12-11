import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StoreTareasService } from 'src/app/services/store-tareas.service';

@Component({
  selector: 'cas-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  openConfirmar: boolean;
  nodoModal: any;

  constructor(private storeService: StoreTareasService) { }

  ngOnInit() {
    this.tareas = this.storeService.getTareas();
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
      this.storeService.removeTareas();
    }
    // close modal
    this.openConfirmar = false;
  }

  private actualizarStore() {
    this.storeService.setTareas(this.tareas);
  }
}
