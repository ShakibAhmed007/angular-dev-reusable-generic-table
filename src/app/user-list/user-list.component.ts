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
    { id: 1, userName: 'Shakib', userEmail: 1.0079, age: '30' },
    {
      id: 2,
      userName: 'Devil',
      userEmail: 4.0026,
      age: '25'
    },
    {
      id: 3,
      userName: 'Iron-Man',
      userEmail: 6.941,
      age: '20'
    },
    {
      id: 4,
      userName: 'Wonder-Woman',
      userEmail: 9.0122,
      age: '30'
    },
    {
      id: 5,
      userName: 'Super-Man',
      userEmail: 10.811,
      age: '40'
    },
    { id: 6, userName: 'Shakib', userEmail: 1.0079, age: '30' },
    {
      id: 7,
      userName: 'Devil',
      userEmail: 4.0026,
      age: '25'
    },
    {
      id: 8,
      userName: 'Iron-Man',
      userEmail: 6.941,
      age: '20'
    },
    {
      id: 9,
      userName: 'Wonder-Woman',
      userEmail: 9.0122,
      age: '30'
    },
    {
      id: 10,
      userName: 'Super-Man',
      userEmail: 10.811,
      age: '40'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
