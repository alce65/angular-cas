import { Component, OnInit, Input, EventEmitter, Output, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'cas-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit, OnChanges {
  @Input() msg: string;
  @Input() estado: boolean;
  @Output() confirm: EventEmitter<boolean>;
  nodoModal: any;

  constructor(private elem: ElementRef) {
    this.confirm = new EventEmitter();
  }

  ngOnInit() {
    this.msg =  this.msg || '¿Estas seguro?';
    this.nodoModal = this.elem.nativeElement.children[0];
  }

  ngOnChanges(cambios: any) {
    if (cambios.estado.firstChange) {
      return;
    }
    if (this.estado) {
      this.nodoModal.showModal();
    } else {
      this.nodoModal.close();
    }
  }

  onClick(respuesta: boolean) {
    this.confirm.next(respuesta);
  }

}
