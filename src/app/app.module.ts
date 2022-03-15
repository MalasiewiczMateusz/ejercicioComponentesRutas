import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloRutasModule } from './modulo-rutas/modulo-rutas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloRutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
