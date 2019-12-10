import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';


const routes: Routes = [
  {
    path: '',
    component: CursosComponent ,
    children: [
      { path: 'form-td', component: FormTdComponent },
      { path: 'form-md', component: FormMdComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
