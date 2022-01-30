import {
  ComponentRef,
  Directive,
  ElementRef,
  Optional,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appEnvelopeContent]',
})
export class EnvelopeContentDirective {
  constructor(
    @Optional() public componentRef: ComponentRef<any>,
    @Optional() public elementRef: ElementRef<any>
  ) {
    console.log('EnvelopeContentDirective');
  }
}
