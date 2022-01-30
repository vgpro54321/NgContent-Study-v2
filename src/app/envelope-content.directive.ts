import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEnvelopeContent]',
})
export class EnvelopeContentDirective {
  constructor() {
    console.log('EnvelopeContentDirective');
  }
}
