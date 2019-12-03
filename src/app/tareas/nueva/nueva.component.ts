import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'cas-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  fcNuevaTarea: FormControl;
  @Output() addTarea: EventEmitter<TareaModel>;

  constructor() {
    this.addTarea = new EventEmitter();
   }

  ngOnInit() {
    this.fcNuevaTarea = new FormControl();
  }

  onAddSubmit() {
    if(!this.fcNuevaTarea.value) {
      return;
    }
    this.addTarea.next(new TareaModel(this.fcNuevaTarea.value));
  }
}
