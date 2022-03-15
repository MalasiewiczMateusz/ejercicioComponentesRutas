import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcoComponent } from './componentes/barco/barco.component';
import { BiciComponent } from './componentes/bici/bici.component';
import { CocheComponent } from './componentes/coche/coche.component';
import { MotoComponent } from './componentes/moto/moto.component';
import { PatineteComponent } from './componentes/patinete/patinete.component';

const routes: Routes = [
  {
    path:'',
    component:BarcoComponent,
    pathMatch:'full'
  },
  {
    path:'bici',
    component:BiciComponent
  },
  {
    path:'coche',
    component:CocheComponent
  },
  {
    path:'moto',
    component:MotoComponent
  },
  {
    path:'patinete',
    component:PatineteComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
