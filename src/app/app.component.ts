import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/ItemService';
import { ListItems } from './types/ListItem';
import { TabItems } from './types/TabItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  tabItems: TabItems = [
    { id: 'animals', label: 'ANIMALS' },
    { id: 'fruitveg', label: 'FRUITS & VEGGIES' },
  ];
  listItems: ListItems = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    const itemTypeId = this.tabItems[0].id;
    this.fetchAndSetListItems(itemTypeId);
  }

  onActiveTabIdChange = (itemTypeId: string) => {
    this.fetchAndSetListItems(itemTypeId);
  };

  fetchAndSetListItems = (itemTypeId: string) => {
    return this.itemService.get(itemTypeId).subscribe(listItems => {
      this.listItems = listItems;
    });
  };
}
