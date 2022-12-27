import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { AppComponent } from './app.component';
import {
  ItemTabGroupComponent,
  ListItemsComponent,
  ListItemComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ItemTabGroupComponent,
    ListItemsComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
