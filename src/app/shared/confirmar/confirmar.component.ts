import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cas-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {
  @Input() msg: string;
  @Output() confirm: EventEmitter<boolean>;
  constructor() {
    this.confirm = new EventEmitter();
  }

  ngOnInit() {
    this.msg =  this.msg || '¿Estas seguro de borrar todas la tareas?';
  }

  onClick(respuesta: boolean) {
    this.confirm.next(respuesta);
  }

}
