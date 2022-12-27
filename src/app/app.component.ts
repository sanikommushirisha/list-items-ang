import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/ItemService';
import { ListItems } from './types/ListItem';
import { ItemTypes } from './types/ItemType';

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

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    const itemTypeId = this.itemTypes[0].id;
    this.selectedItemTypeId = itemTypeId;
    this.fetchAndSetListItems(itemTypeId);
  }

  onItemTypeChange = (itemTypeId: string) => {
    this.selectedItemTypeId = itemTypeId;
    this.fetchAndSetListItems(itemTypeId);
  };

  fetchAndSetListItems = (itemTypeId: string) => {
    return this.itemService.get(itemTypeId).subscribe(listItems => {
      this.listItems = listItems;
    });
  };
}
