import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TabItems } from '../../types/TabItem';

@Component({
  selector: 'app-item-tab-group',
  templateUrl: './item-tab-group.component.html',
  styleUrls: ['./item-tab-group.component.sass'],
})
export class ItemTabGroupComponent {
  @Input() items: TabItems;
  @Output() itemIdChange = new EventEmitter<string>();

  onTabChange = (tabEvent: MatTabChangeEvent) => {
    const itemTypeId = this.items[tabEvent.index].id;
    this.itemIdChange.emit(itemTypeId);
  };
}
