import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RekenmachineComponent } from './rekenmachine/rekenmachine.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, RekenmachineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
