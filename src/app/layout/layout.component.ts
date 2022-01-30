import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EnvelopeContentDirective } from '../envelope-content.directive';
import { EnvelopeDirective } from '../envelope.directive';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, AfterContentInit {
  public expanded: boolean = false;

  @ContentChild(EnvelopeDirective) envelope!: EnvelopeDirective;

  @ContentChild(EnvelopeContentDirective)
  envelopeContent!: EnvelopeContentDirective;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(
      this.envelope?.templateRef ? 'templateRef assigned' : ' no template ref'
    );

    console.log(
      this.envelopeContent?.viewContainerRef
        ? 'envelopeContent prop assigned'
        : ' no envelopeContent prop ref'
    );
  }
  expandCollapse() {
    this.expanded != this.expanded;
  }
}
