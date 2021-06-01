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
    author: 'Author'
  };

  tableData: any[] = [
    { id: 1, bookName: 'Are You There, Vodka?', price: 1.0079, author: 'A' },
    {
      id: 2,
      bookName: 'The Devil Wears Prada by Lauren Weisberger',
      price: 4.0026,
      author: 'B'
    },
    {
      id: 3,
      bookName:
        'The Curious Incident of the Dog in the Night-Time by Mark Haddon',
      price: 6.941,
      author: 'C'
    },
    {
      id: 4,
      bookName: 'How to Win Friends and Influence People by Dale Carnegie',
      price: 9.0122,
      author: 'D'
    },
    {
      id: 5,
      bookName: 'Cloudy with a Chance of Meatballs by Judi Barrett.',
      price: 10.811,
      author: 'E'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
