import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item-component.sass'],
})
export class ListItemComponent {
  @Input() imageUrl: string;
  @Input() variant = 'overlap';
}
