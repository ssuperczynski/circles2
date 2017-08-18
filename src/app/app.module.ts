import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
  ],
  imports: [
    BrowserModule,
    NvD3Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
