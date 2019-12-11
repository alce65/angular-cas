import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { MainComponent } from './main/main.component';
import { ByMockComponent } from './by-mock/by-mock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ByGoogleComponent } from './by-google/by-google.component';
import { ByServiceComponent } from './by-service/by-service.component';


@NgModule({
  declarations: [MainComponent, ByMockComponent, ByGoogleComponent, ByServiceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
