import { Component, Input, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';

import { trigger, style, transition, animate } from '@angular/animations';
import { ListItems } from 'src/app/types/ListItem';

@Component({
  selector: 'app-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass'],
  animations: [
    trigger('onEnterAnimation', [
      transition('*=>*', [
        style({ opacity: 0, transform: 'translate3d(0, -4%, 0)' }), // initial
        animate(
          '0.5s',
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }) // final
        ),
      ]),
    ]),
  ],
})
export class ListItemsComponent implements OnInit {
  gridSize: number;
  @Input() items: ListItems;
  breakPointColMap = {
    [Breakpoints.Large]: 4,
    [Breakpoints.Medium]: 3,
    [Breakpoints.Small]: 2,
    [Breakpoints.XSmall]: 1,
    [Breakpoints.Handset]: 1,
  };
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(Object.keys(this.breakPointColMap))
      .subscribe(() => {
        this.screenSizeChanged();
      });
  }

  screenSizeChanged = () => {
    for (const [breakPointSize, gridSize] of Object.entries(
      this.breakPointColMap
    )) {
      if (this.breakpointObserver.isMatched(breakPointSize)) {
        this.gridSize = gridSize;
        return;
      }
    }
  };
}
