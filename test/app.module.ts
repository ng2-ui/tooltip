import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2TooltipOverlayModule }  from 'ng2-tooltip-overlay';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2TooltipOverlayModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
