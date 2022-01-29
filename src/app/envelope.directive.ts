import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appEnvelope]',
})
export class EnvelopeDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
