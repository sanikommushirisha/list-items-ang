import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { AppComponent } from './app.component';
import {
  TabGroupComponent,
  ListItemsComponent,
  ListItemComponent,
  HamburgerMenuComponent,
} from './components';
import { AppHeaderContainer } from './containers';

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    ListItemsComponent,
    ListItemComponent,
    HamburgerMenuComponent,
    AppHeaderContainer,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
