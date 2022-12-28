import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Dialog } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { setItemTypeId } from './store/root/root.actions';

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
  itemTypeId: Observable<string>; // Displayed Item type - 'animals' or 'fruits & veg'
  itemTypes: ItemTypes = [
    // Used to display items in tab pane or burger menu based on screensize
    { id: 'animals', label: 'ANIMALS' },
    { id: 'fruitveg', label: 'FRUITS & VEGGIES' },
  ];
  listItems: ListItems = [];
  selectedItem: ListItem | undefined; //Selected Item(on click) to be displayed on modal

  constructor(
    public dialog: Dialog,
    private itemService: ItemService,
    private snackBar: MatSnackBar,
    private store: Store<{ itemTypeId: string }>
  ) {
    this.itemTypeId = store.select('itemTypeId'); //Read persisted state from local storage
  }

  ngOnInit(): void {
    this.itemTypeId.subscribe(itemTypeId =>
      this.fetchAndSetListItems(itemTypeId)
    );
  }

  onItemTypeChange = (itemTypeId: string) => {
    this.store.dispatch(setItemTypeId({ itemTypeId }));
    this.fetchAndSetListItems(itemTypeId);
  };

  fetchAndSetListItems = (itemTypeId: string) => {
    // Fetch and Set list items on tab change, logo click or burger menu item click(in small devices)
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

  onListItemClick = (itemId: number) => {
    // Show Item details inside a modal
    this.selectedItem = this.listItems.find(item => item.id === itemId);
    this.dialog.open(AppModalContainer, {
      data: this.selectedItem,
      autoFocus: false,
      maxWidth: '70vw',
    });
  };
}
