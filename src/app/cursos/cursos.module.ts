import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { MenuComponent } from './menu/menu.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, MenuComponent, FormTdComponent, FormMdComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
