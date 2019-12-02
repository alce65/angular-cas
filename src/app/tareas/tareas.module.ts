import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { SimpleComponent } from './simple/simple.component';
import { PlusComponent } from './plus/plus.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { NuevaComponent } from './nueva/nueva.component';
import { TareaComponent } from './tarea/tarea.component';


@NgModule({
  declarations: [MainComponent, SimpleComponent, PlusComponent, MenuComponent, NuevaComponent, TareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
