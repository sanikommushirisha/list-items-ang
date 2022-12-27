import { Component, Inject } from '@angular/core';
import { ListItem } from 'src/app/types/ListItem';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.container.html',
  styleUrls: ['./app-modal.container.sass'],
})
export class AppModalContainer {
  constructor(@Inject(DIALOG_DATA) public item: ListItem) {}
}
