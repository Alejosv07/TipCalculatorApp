import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Calculatorcomponent } from './calculator/calculatorcomponent';

@NgModule({
  declarations: [
    AppComponent,Calculatorcomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
