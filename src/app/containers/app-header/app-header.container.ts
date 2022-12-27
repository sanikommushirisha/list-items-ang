import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TabItems } from '../../types/TabItem';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.container.html',
  styleUrls: ['./app-header.container.sass'],
})
export class AppHeaderContainer {
  @Input() items: TabItems;
  @Input() itemIdChange: (a: string) => void;
}
