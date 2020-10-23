import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { AppinfoDirective } from './appinfo.directive';
import { AppnotDirective } from './appnot.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
    AppinfoDirective,
    AppnotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
