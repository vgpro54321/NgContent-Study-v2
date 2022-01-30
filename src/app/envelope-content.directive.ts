import { ComponentRef, Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEnvelopeContent]',
})
export class EnvelopeContentDirective {
  constructor(public componentRef: ComponentRef<any>) {
    console.log('EnvelopeContentDirective');
  }
}
