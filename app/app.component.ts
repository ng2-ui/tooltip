import {Component, Type} from '@angular/core';

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
  styles: [`
    *[ng2-tooltip] {margin: 40px; border: 1px solid #ccc }
 `],
})
export class AppComponent {
}
