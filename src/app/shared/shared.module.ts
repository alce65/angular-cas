import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ConfirmarComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ConfirmarComponent,
    InfoComponent
  ]
})
export class SharedModule { }
