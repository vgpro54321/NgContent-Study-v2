import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public expanded: boolean = false;

  constructor() {}

  ngOnInit() {}

  expandCollapse() {
    this.expanded != this.expanded;
  }
}
