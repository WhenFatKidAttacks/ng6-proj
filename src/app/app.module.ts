import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import {MatButtonModule, MatCheckboxModule,MatTableModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import { DataService } from './data.service';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    TableComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
