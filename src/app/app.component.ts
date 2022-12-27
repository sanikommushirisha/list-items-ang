import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ItemService } from './services/ItemService';
import { DisplayItems } from './types/DisplayItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  //selectedTabIndex = 0;
  photoLists = [
    { id: 'animals', label: 'ANIMALS' },
    { id: 'fruits-veggies', label: 'FRUITS & VEGGIES' },
  ];
  displayItems: DisplayItems = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    const itemTypeId = this.photoLists[0].id;
    this.fetchAndSetDisplayItems(itemTypeId);
  }

  fetchAndSetDisplayItems = (itemTypeId: string) => {
    return this.itemService.get(itemTypeId).subscribe(displayItems => {
      this.displayItems = displayItems;
    });
  };

  onTabChange = (tabEvent: MatTabChangeEvent) => {
    const itemTypeId = this.photoLists[tabEvent.index].id;
    this.fetchAndSetDisplayItems(itemTypeId);
  };
}
