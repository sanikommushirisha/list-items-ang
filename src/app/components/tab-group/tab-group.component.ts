import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ItemTypes } from '../../types/ItemType';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.sass'],
})
export class TabGroupComponent implements OnChanges {
  @Input() items: ItemTypes;
  @Input() selectedItemId: string;
  @Output() selectedTabChange = new EventEmitter<string>();
  selectedIndex: number;
  ngOnChanges() {
    this.selectedIndex =
      this.items.findIndex(item => item.id === this.selectedItemId) || 0;
  }
  onTabChange = (tabEvent: MatTabChangeEvent) => {
    const itemTypeId = this.items[tabEvent.index].id;
    this.selectedTabChange.emit(itemTypeId);
  };
}
