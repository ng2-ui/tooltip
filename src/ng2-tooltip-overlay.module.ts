import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';
import { Ng2OverlayModule } from 'ng2-overlay';

import {Ng2TooltipDirective} from "./ng2-tooltip-directive";

@NgModule({
  imports: [ CommonModule, FormsModule, Ng2OverlayModule ],
  declarations: [Ng2TooltipDirective],
  exports: [ Ng2TooltipDirective ]
})
export class Ng2TooltipOverlayModule {}
