import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';
import { Ng2OverlayModule } from 'ng2-overlay';

import {Ng2TooltipComponent} from "./ng2-tooltip-component";

@NgModule({
  imports: [CommonModule, FormsModule, Ng2OverlayModule],
  declarations: [Ng2TooltipComponent],
  exports: [Ng2TooltipComponent]
})
export class Ng2TooltipOverlayModule {}
