import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemTypes } from '../../types/ItemType';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.sass'],
})
export class HamburgerMenuComponent {
  @Input() items: ItemTypes;
  @Output() menuItemClick = new EventEmitter<string>();

  onMenuItemClick = (itemTypeId: string) => {
    console.log(itemTypeId);
    this.menuItemClick.emit(itemTypeId);
  };
}
