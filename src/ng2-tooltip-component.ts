import { 
  Component,
  ViewContainerRef,
  Input,
  ViewEncapsulation
} from '@angular/core';

import {Ng2OverlayManager, Ng2Overlay} from 'ng2-overlay';

@Component({
  selector: '[ng2-tooltip]',
  template: '<ng-content></ng-content>',
  host: {
    '(mouseover)': 'showTooltip($event)',
    '(mouseout)':  'hideTooltip($event)'
  },
  styles: [`
    ng2-tooltip .tooltip-contents {
      border: 1px solid #ccc; padding: 5px
    }
    ng2-tooltip .tooltip-down-arrow {
      height: 10px;
    }
    ng2-tooltip .tooltip-down-arrow:before {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      left: 45%;
      bottom: 5px;
      background: #FFFFFF;
      border-left:1px solid #ccc;
      border-bottom:1px solid #ccc;
      transform:rotate(-45deg);
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class Ng2TooltipComponent {

  @Input('ng2-tooltip') tooltip: string;

  el: HTMLElement;
  ng2Overlay: Ng2Overlay;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public ng2OverlayManager: Ng2OverlayManager
  ) {
    this.el = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.ng2Overlay = this.getTooltipOverlay(this.el, this.tooltip);
  }

  showTooltip($event) {
    this.ng2OverlayManager.open(this.ng2Overlay, $event);
    $event.stopPropagation();
  }

  hideTooltip($event) {
    this.ng2OverlayManager.close(this.ng2Overlay);
    $event.stopPropagation();
  }

  getTooltipOverlay(el, tooltip) {
    let tooltipEl = document.createElement('ng2-tooltip');
    tooltipEl.style.display = 'none';
    let divEl = document.createElement('div');
    divEl.innerHTML = `
       <div class='tooltip-contents'>${tooltip}</div>
       <div class='tooltip-down-arrow'></div>
    `;
    tooltipEl.appendChild(divEl);

    //el.parentElement.insertBefore(tooltipEl, el.nextSibling);
    el.appendChild(tooltipEl);

    let ng2Overlay = new Ng2Overlay(tooltipEl, {
      id: 'tooltip-' + (el.id || Math.floor(Math.random()*1000000)),
      position: 'top cursor outside'
    });
    this.ng2OverlayManager.register(ng2Overlay);
    return ng2Overlay;
  }
}
