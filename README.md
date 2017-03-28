# tooltip
Angular2+ tooltip directive

<a href="https://rawgit.com/ng2-ui/tooltip/master/app/index.html">
  <img src="http://i.imgur.com/ezWv5Jw.png" width="50% border="1" />
</a>

Plunker Example: https://plnkr.co/edit/6reiaH?p=preview

## Install

1. install @ngitooltip

        $ npm install @ngui/tooltip --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['@ngui/tooltip'] = 'node_modules/@ngui/tooltip/dist/tooltip.umd.js';

3. import NguiTooltipOverlay to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiTooltipModule } from '@ngui/tooltip';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiTooltipModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

3.  add ngui-tooltip.css into your html

        <link rel="stylesheet" href="https://unpkg.com/ngui-tooltip-overlay/dist/ngui-tooltip.css" />

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


