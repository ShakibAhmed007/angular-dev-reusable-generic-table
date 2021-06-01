import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader;
  @ViewChild(MatSort) sort: MatSort;
  objectKeys = Object.keys;
  dataSource: any;

  constructor() {}

  ngOnInit() {
    console.log(this.tableData);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
