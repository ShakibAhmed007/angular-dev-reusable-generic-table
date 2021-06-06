import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  columnHeader = {
    id: 'ID',
    bookName: 'Book Name',
    price: 'Price',
    author: 'Author',
    actions: 'Actions'
  };

  tableData: any[] = [
    { id: 1, bookName: 'Are You There, Vodka?', price: 200, author: 'A' },
    {
      id: 2,
      bookName: 'The Devil Wears Prada',
      price: 100,
      author: 'B'
    },
    {
      id: 3,
      bookName: 'The Curious Incident of the Dog',
      price: 400,
      author: 'C'
    },
    {
      id: 4,
      bookName: 'How to Win Friends and Influence',
      price: 300,
      author: 'D'
    },
    {
      id: 5,
      bookName: 'Cloudy with a Chance of Meatballs',
      price: 200,
      author: 'E'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
