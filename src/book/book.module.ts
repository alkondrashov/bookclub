import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { Book } from '../app/book';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    BrowserModule,
    BookRoutingModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class BookModule { }
