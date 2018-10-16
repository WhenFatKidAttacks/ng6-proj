import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'table',
    component:TableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
