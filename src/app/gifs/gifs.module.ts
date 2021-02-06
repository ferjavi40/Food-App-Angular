import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
//spinner
import { NgxSpinnerModule } from "ngx-spinner";






@NgModule({
  declarations: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
