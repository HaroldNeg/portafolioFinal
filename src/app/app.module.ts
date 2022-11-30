import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionesComponent } from './pages/selecciones/selecciones.component';
import { LogrosComponent } from './pages/logros/logros.component';
import { CompeticionesComponent } from './pages/competiciones/competiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionesComponent,
    LogrosComponent,
    CompeticionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
