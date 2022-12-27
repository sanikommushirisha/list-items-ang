import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item-component.sass'],
})
export class ListItemComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
}
