import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//modulos
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
