import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KlesCarouselModule } from 'kles-ng-carousel';


@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, KlesCarouselModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
