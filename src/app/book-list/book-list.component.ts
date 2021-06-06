import { Component, OnInit } from '@angular/core';
import { BookListService } from './service/book-list.service';

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
  tableData: any[];

  constructor(private bookListService: BookListService) {}

  ngOnInit() {
    this.bookListService.getList().subscribe(res => {
      this.tableData = res;
    });
  }
}
