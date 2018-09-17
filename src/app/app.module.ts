import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZluxGridModule } from '@zlux/grid';
import { ZluxPaginatorModule } from '@zlux/widgets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZluxGridModule,
    ZluxPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
