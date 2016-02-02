import { Component } from 'angular2/core';
import { RouterOutlet, RouterLink, RouteConfig } from 'angular2/router';

import Home from './components/home/home';
import Books from './components/books/books';

@RouteConfig([
    { path: '/home', name: 'Home', component: Home, useAsDefault: true },
    { path: '/books/...', name: 'Books', component: Books}
])

@Component({
  selector: 'book-monkey',
  directives: [RouterOutlet, RouterLink],
  template: '<router-outlet></router-outlet>'
})

export default class BookMonkey {
  constructor() { }
}