import { Component, Inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ListItem } from 'src/app/types/ListItem';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.container.html',
  styleUrls: ['./app-modal.container.sass'],
})
export class AppModalContainer implements OnInit {
  constructor(
    @Inject(DIALOG_DATA) public item: ListItem,
    public breakpointObserver: BreakpointObserver
  ) {}
  variant: string;

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      this.variant = result.matches ? 'align' : 'overlap';
    });
  }
}
