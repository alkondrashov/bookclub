import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  title = 'bookstore-book';

  @Input()
  public name = 'Not available';
  @Input()
  public author = 'Not available';
  @Input()
  public isbn = 'Not available';
  @Input()
  public status = 'Not available';
}
