import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterAttribute]'
})
export class BetterAttributeDirective implements OnInit{

  @HostBinding('style.backgroundColor') background = 'pink';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.background = 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
    this.background = 'pink'
  }
}
