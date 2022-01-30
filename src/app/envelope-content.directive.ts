import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEnvelopeContent]',
})
export class EnvelopeContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log('EnvelopeContentDirective');
  }
}
