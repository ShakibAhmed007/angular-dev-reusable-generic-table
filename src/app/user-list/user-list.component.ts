import { Component, OnInit } from '@angular/core';
import { UserListService } from './service/user-list.service';

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

  tableData: any[];

  constructor(public userListService: UserListService) {}

  ngOnInit() {
    this.userListService.getList().subscribe(res => {
      this.tableData = res;
    });
  }
}
