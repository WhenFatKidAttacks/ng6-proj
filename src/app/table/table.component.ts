import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Data } from '../data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new UserDataSource(this.data);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private data:DataService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private data: DataService) {
    super();
  }
  connect(): Observable<Data[]> {
    return this.data.getUsers();
  }
  disconnect() {}
}