import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';
import { NguiOverlayModule } from '@ngui/overlay';

import {NguiTooltipDirective} from "./tooltip-directive";

@NgModule({
  imports: [ CommonModule, FormsModule, NguiOverlayModule ],
  declarations: [NguiTooltipDirective],
  exports: [ NguiTooltipDirective ]
})
export class NguiTooltipModule {}
