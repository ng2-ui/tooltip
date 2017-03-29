import { ViewContainerRef } from '@angular/core';
import { NguiOverlayManager, NguiOverlay } from '@ngui/overlay';
export declare class NguiTooltipDirective {
    viewContainerRef: ViewContainerRef;
    overlayManager: NguiOverlayManager;
    tooltip: string;
    el: HTMLElement;
    overlay: NguiOverlay;
    constructor(viewContainerRef: ViewContainerRef, overlayManager: NguiOverlayManager);
    ngAfterViewInit(): void;
    showTooltip($event: any): void;
    hideTooltip($event: any): void;
    getTooltipOverlay(el: any, tooltip: any): NguiOverlay;
}
