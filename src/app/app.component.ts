import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    public dialog: Dialog,
    private itemService: ItemService,
    private snackBar: MatSnackBar
  ) {}

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
    return this.itemService.get(itemTypeId).subscribe({
      next: listItems => {
        this.listItems = listItems;
      },
      error: error => {
        this.listItems = [];
        this.snackBar.open(error.message, 'Dismiss');
      },
    });
  };
}
