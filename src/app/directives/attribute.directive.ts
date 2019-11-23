import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[basicAttributeDirective]'
})
export class AttributeDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
