import { Component, Input } from '@angular/core';
import {
  // Trigger is imported here
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ListItems } from 'src/app/types/ListItem';

@Component({
  selector: 'app-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass'],
  animations: [
    trigger('onEnterAnimation', [
      transition('*=>*', [
        style({ opacity: 0, transform: 'translate3d(0, -4%, 0)' }), // initial
        animate(
          '0.5s',
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }) // initial
        ), // final
      ]),
    ]),
  ],
})
export class ListItemsComponent {
  @Input() items: ListItems;
}
