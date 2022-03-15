import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcoComponent } from '../componentes/barco/barco.component';
import { BiciComponent } from '../componentes/bici/bici.component';
import { CocheComponent } from '../componentes/coche/coche.component';
import { MotoComponent } from '../componentes/moto/moto.component';
import { PatineteComponent } from '../componentes/patinete/patinete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BarcoComponent,
    BiciComponent,
    CocheComponent,
    MotoComponent,
    PatineteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    BarcoComponent,
    BiciComponent,
    CocheComponent,
    MotoComponent,
    PatineteComponent
  ]
})
export class ModuloRutasModule { }
