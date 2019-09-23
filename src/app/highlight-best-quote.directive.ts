import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBestQuote]'
})
export class HighlightBestQuoteDirective {

  constructor(private el: ElementRef) {
  this.el.nativeElement.style.backgroundColor = '#f9c128';
  }

}
