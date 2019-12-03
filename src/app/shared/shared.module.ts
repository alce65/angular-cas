import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './confirmar/confirmar.component';



@NgModule({
  declarations: [ConfirmarComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfirmarComponent]
})
export class SharedModule { }
