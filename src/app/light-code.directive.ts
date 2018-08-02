import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightCode]'
})
export class LightCodeDirective {
  constructor(private _el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(0);
  }

  private highlight(opacity: number) {
    this._el.nativeElement.lastChild.lastChild.style.opacity = opacity;
  }

}
