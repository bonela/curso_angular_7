import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViajesComponent } from './viajes/viajes.component';
import { Empleados } from './empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajesComponent,
    Empleados
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
