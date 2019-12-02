import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'cas-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  nuevaTarea: TareaModel;
  tareas: Array<TareaModel>;
  storeKey: string;
  @ViewChild('confirmar', {static: true}) modal: ElementRef;

  constructor() { }

  ngOnInit() {
    this.storeKey = 'tareas';
    this.tareas = JSON.parse(localStorage.getItem(this.storeKey)) || [];
    this.nuevaTarea = new TareaModel();
  }

  onAddTarea() {
    if (!this.nuevaTarea.nombre) {
      return;
    }
    this.tareas.push(this.nuevaTarea);
    this.actualizarStore();
    this.nuevaTarea = new TareaModel();
    console.log(this.tareas);
  }

  onChecked() {
    console.log(this.tareas);
    this.actualizarStore();
  }

  onDeleteTarea(i: number) {
    this.tareas.splice(i, 1);
    this.actualizarStore();
  }

  onDeleteConfirmar() {
    this.modal.nativeElement.showModal();
  }

onDeleteAll(del: boolean) {
    if (del) {
      this.tareas = [];
      localStorage.removeItem(this.storeKey);
    }
    this.modal.nativeElement.close();
  }

  private actualizarStore() {
    localStorage.setItem(this.storeKey,
      JSON.stringify(this.tareas));
  }

}
