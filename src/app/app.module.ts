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
import { AppHeaderContainer, AppModalContainer } from './containers';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    ListItemsComponent,
    ListItemComponent,
    HamburgerMenuComponent,
    AppHeaderContainer,
    AppModalContainer,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
