import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  tableData: any[] = [
    {
      id: 1,
      userName: 'Shakib',
      userEmail: 'a@gmail.com',
      age: '30',
      isEditable: false
    },
    {
      id: 2,
      userName: 'Devil',
      userEmail: 'a@gmail.com',
      age: '25',
      canEdit: false
    },
    {
      id: 3,
      userName: 'Iron-Man',
      userEmail: 'a@gmail.com',
      age: '20',
      canEdit: false
    },
    {
      id: 4,
      userName: 'Wonder-Woman',
      userEmail: 'a@gmail.com',
      age: '30',
      canEdit: true
    },
    {
      id: 5,
      userName: 'Super-Man',
      userEmail: 'a@gmail.com',
      age: '40',
      canEdit: true
    },
    {
      id: 6,
      userName: 'Shakib',
      userEmail: 'a@gmail.com',
      age: '30',
      canEdit: true
    },
    {
      id: 7,
      userName: 'Devil',
      userEmail: 'a@gmail.com',
      age: '25',
      canEdit: true
    },
    {
      id: 8,
      userName: 'Iron-Man',
      userEmail: 'a@gmail.com',
      age: '40',
      canEdit: true
    },
    {
      id: 9,
      userName: 'Wonder-Woman',
      userEmail: 'a@gmail.com',
      age: '40',
      canEdit: true
    },
    {
      id: 10,
      userName: 'Super-Man',
      userEmail: 'a@gmail.com',
      age: '40',
      canEdit: false
    }
  ];

  getList() {
    return of(this.tableData);
  }
}
