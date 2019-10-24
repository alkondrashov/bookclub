import { Component } from '@angular/core';
import { BookServiceService } from './book-service.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore-app';

  bookList: Book[];

  constructor(
	  private bookService: BookServiceService
  ) {
	bookService.getBooks().subscribe(books => {
		this.bookList = books;
	});
  }
  counter(i: number) {
	  return new Array(i);
	}

	getAllBooks(){
		this.bookService.getBooks().subscribe(books => {
			this.bookList = books;
		});
	}

	getAvailBooks(){
		this.bookService.getAvailuableBooks().subscribe(books => {
			this.bookList = books;
		});

		console.log("getAvailBooks called")
	}
	getRentedBooks(){
		this.bookService.getRentedBooks().subscribe(books => {
			this.bookList = books;
		});
	}


}
