import { Component, OnInit } from '@angular/core';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { ItemService } from './services/ItemService';
import { ListItems, ListItem } from './types/ListItem';
import { ItemTypes } from './types/ItemType';
import { AppModalContainer } from './containers/app-modal/app-modal.container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  selectedItemTypeId: string;
  itemTypes: ItemTypes = [
    { id: 'animals', label: 'ANIMALS' },
    { id: 'fruitveg', label: 'FRUITS & VEGGIES' },
  ];
  listItems: ListItems = [];
  selectedItem: ListItem | undefined;

  constructor(public dialog: Dialog, private itemService: ItemService) {}

  ngOnInit(): void {
    const itemTypeId = this.itemTypes[0].id;
    this.selectedItemTypeId = itemTypeId;
    this.fetchAndSetListItems(itemTypeId);
  }

  onItemTypeChange = (itemTypeId: string) => {
    this.selectedItemTypeId = itemTypeId;
    this.fetchAndSetListItems(itemTypeId);
  };

  showModal = (itemId: number) => {
    this.selectedItem = this.listItems.find(item => item.id === itemId);
    this.dialog.open(AppModalContainer, {
      data: this.selectedItem,
      autoFocus: false,
      maxWidth: '70vw',
    });
  };

  fetchAndSetListItems = (itemTypeId: string) => {
    return this.itemService.get(itemTypeId).subscribe(listItems => {
      this.listItems = listItems;
    });
  };
}
