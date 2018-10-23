import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Data } from '../data.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource = new UserDataSource(this.data);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  dataSource2: MatTableDataSource<DataService>;
  tempdata=[];
  
  constructor(private data:DataService) { 
    //let users:DataService[] =[];
   // this.dataSource2 = new MatTableDataSource();  
  }

  ngOnInit() {
    this.data.getUsers()
    .subscribe(res => this.tempdata = res);
    this.dataSource2 = new MatTableDataSource(this.tempdata);
  }

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource2.filter = filterValue;
  }

}

export class UserDataSource extends DataSource<any> {
  employees = [];
  constructor(private data: DataService) {
    super();
  }
  connect(): Observable<Data[]> {
    return this.data.getUsers();
  }
  disconnect() {}
}