import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  exports: [
    MatIconModule,
    DialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatMenuModule,
  ],
})
export class MaterialModule {}
