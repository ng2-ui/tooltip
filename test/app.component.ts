import {Component, Type} from '@angular/core'
import { Ng2TooltipDirective } from 'ng2-tooltip';
import { OverlayManager } from 'ng2-overlay';

@Component({
  selector: 'my-app',
  template: `
    <div ng2-tooltip="This is my tooltip">
      tooltip 1
      <div ng2-tooltip="this is also tootip">
        tooltip 2 
        <div ng2-tooltip="this is too tootip">
          tooltip 3
        </div>
      </div>
    </div>
    `,
  providers: [OverlayManager],
  directives: [<Type>Ng2TooltipDirective],
  styles: [`
    *[ng2-tooltip] {margin: 40px; border: 1px solid #ccc }
 `],
})
export class AppComponent {
}
