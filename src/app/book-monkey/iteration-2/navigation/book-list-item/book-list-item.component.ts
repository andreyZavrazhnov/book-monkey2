import { Component, Input } from '@angular/core';
import { Book } from '../domain/book';

@Component({
  selector: 'a.book-list-item',
  moduleId: module.id,
  templateUrl: 'book-list-item.component.html'
})

export class BookListItemComponent {
  @Input() book: Book;
}
