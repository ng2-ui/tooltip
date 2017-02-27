# ng2-tooltip-overlay
Angular2 tooltip directive

<a href="https://rawgit.com/ng2-ui/ng2-tooltip-overlay/master/app/index.html">
  <img src="http://i.imgur.com/ezWv5Jw.png" width="50% border="1" />
</a>

Plunker Example: https://plnkr.co/edit/6reiaH?p=preview

## Install

1. install ng2-tooltip-overlay

        $ npm install ng2-tooltip-overlay --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-tooltip-overlay'] = 'node_modules/ng2-tooltip-overlay/dist';
        packages['ng2-tooltip-overlay'] = { main: 'ng2-tooltip-overlay.umd.js', defaultExtension: 'js' }

3. import Ng2TooltipOverlay to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2TooltipOverlay } from 'ng2-tooltip-overlay';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2TooltipOverlay],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

3.  add ng2-tooltip.css into your html

        <link rel="stylesheet" href="https://unpkg.com/ng2-tooltip-overlay/dist/ng2-tooltip.css" />

## Usage it in your code

     <div tooltip="This is my tooltip">
        Move mouse over here to see the tooltip
     </div>

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


