import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

	private bookUrl = 'http://ey-book-club.herokuapp.com/'
	private allBookUrl = 'http://ey-book-club.herokuapp.com/books/all'
	private rentBookUrl = 'http://ey-book-club.herokuapp.com/books/rented'
	private availBookUrl = 'http://ey-book-club.herokuapp.com/books/available'
  constructor(
    private http: HttpClient
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://ey-book-club.herokuapp.com/books/all/') 

  }

getAvailuableBooks(): Observable<Book[]>{
		return this.http.get<Book[]>(this.availBookUrl);
	// tslint:disa
  }
  getRentedBooks(): Observable<Book[]>{
	  return this.http.get<Book[]>(this.rentBookUrl);
	}
}
