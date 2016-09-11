// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
//noinspection TypeScriptCheckImport
import { Ng2TooltipOverlayModule }  from 'ng2-tooltip-overlay';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2TooltipOverlayModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
