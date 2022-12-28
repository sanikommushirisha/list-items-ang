import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { ItemTypes } from '../../types/ItemType';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.container.html',
  styleUrls: ['./app-header.container.sass'],
})
export class AppHeaderContainer implements OnInit {
  @Input() items: ItemTypes;
  @Input() selectedItemTypeId: string | null;
  @Input() itemTypeChange: (itemId: string) => void;
  isSmallScreen: boolean;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
  onLogoClick = () => {
    this.itemTypeChange(this.items[0].id);
  };
}
