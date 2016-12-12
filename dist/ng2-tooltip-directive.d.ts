import { ViewContainerRef } from '@angular/core';
import { Ng2OverlayManager, Ng2Overlay } from 'ng2-overlay';
export declare class Ng2TooltipDirective {
    viewContainerRef: ViewContainerRef;
    overlayManager: Ng2OverlayManager;
    tooltip: string;
    el: HTMLElement;
    overlay: Ng2Overlay;
    constructor(viewContainerRef: ViewContainerRef, overlayManager: Ng2OverlayManager);
    ngAfterViewInit(): void;
    showTooltip($event: any): void;
    hideTooltip($event: any): void;
    getTooltipOverlay(el: any, tooltip: any): Ng2Overlay;
}
