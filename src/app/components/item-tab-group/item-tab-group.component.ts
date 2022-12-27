import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TabItem } from '../../types/TabItem';

@Component({
  selector: 'app-item-tab-group',
  templateUrl: './item-tab-group.component.html',
  styleUrls: ['./item-tab-group.component.sass'],
})
export class ItemTabGroupComponent {
  @Input() items: Array<TabItem>;
  @Output() itemIdChange = new EventEmitter<number>();

  onTabChange = (tabEvent: MatTabChangeEvent) => {
    const itemTypeId = this.items[tabEvent.index].id;
    this.itemIdChange.emit(itemTypeId);
  };
}
