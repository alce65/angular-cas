import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cas-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: [
    '../main/main.component.css',
    './tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  @Input() i: number;
  @Output() tareaChecked: EventEmitter<number>;
  @Output() tareaDelete: EventEmitter<number>;
  fcCheck: FormControl;

  constructor() {
    this.tareaChecked = new EventEmitter();
    this.tareaDelete = new EventEmitter();
   }

  ngOnInit() {
    this.tarea = {...this.tarea};
    this.fcCheck = new FormControl();
    this.fcCheck.setValue(this.tarea.isCompleted);
    this.fcCheck.valueChanges.subscribe(
      data => {
        this.tarea.isCompleted = data;
        this.tareaChecked.next(this.i);
      }
    );
  }

  /* onCheckedSubmit() {
    this.tarea.isCompleted = this.fcCheck.value;
    this.tareaChecked.next(this.i);
  } */

  onDeleteSubmit() {
    this.tareaDelete.next(this.i);
  }

}
