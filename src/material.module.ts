import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [MatIconModule, MatToolbarModule, MatTabsModule],
})
export class MaterialModule {}
