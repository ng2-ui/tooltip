import {Component, Type} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div ngui-tooltip="This is my tooltip">
      tooltip 1
      <div ngui-tooltip="this is also tootip">
        tooltip 2 
        <div ngui-tooltip="this is too tootip">
          tooltip 3
        </div>
      </div>
    </div>
    `,
  styles: [`
    *[ngui-tooltip] {margin: 40px; border: 1px solid #ccc }
 `],
})
export class AppComponent {
}
