import { Component, ContentChild, OnInit } from '@angular/core';
import { EnvelopeDirective } from '../envelope.directive';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public expanded: boolean = false;
  @ContentChild(EnvelopeDirective) envelope!: EnvelopeDirective;

  constructor() {}

  ngOnInit() {}

  expandCollapse() {
    this.expanded != this.expanded;
  }
}
