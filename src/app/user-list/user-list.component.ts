import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  columnHeader = {
    id: 'ID',
    userName: 'User Name',
    userEmail: 'Email',
    age: 'Age'
  };

  tableData: any[] = [
    { id: 1, userName: 'Shakib', userEmail: 'a@gmail.com', age: '30' },
    {
      id: 2,
      userName: 'Devil',
      userEmail: 'a@gmail.com',
      age: '25'
    },
    {
      id: 3,
      userName: 'Iron-Man',
      userEmail: 'a@gmail.com',
      age: '20'
    },
    {
      id: 4,
      userName: 'Wonder-Woman',
      userEmail: 'a@gmail.com',
      age: '30'
    },
    {
      id: 5,
      userName: 'Super-Man',
      userEmail: 'a@gmail.com',
      age: '40'
    },
    { id: 6, userName: 'Shakib', userEmail: 'a@gmail.com', age: '30' },
    {
      id: 7,
      userName: 'Devil',
      userEmail: 'a@gmail.com',
      age: '25'
    },
    {
      id: 8,
      userName: 'Iron-Man',
      userEmail: 'a@gmail.com',
      age: '20'
    },
    {
      id: 9,
      userName: 'Wonder-Woman',
      userEmail: 'a@gmail.com',
      age: '30'
    },
    {
      id: 10,
      userName: 'Super-Man',
      userEmail: 'a@gmail.com',
      age: '40'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
