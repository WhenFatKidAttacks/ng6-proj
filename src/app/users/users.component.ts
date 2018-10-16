import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  users$:any=[];
  hide$:any=[];
  constructor(private data:DataService,public rest:RestService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

  delete(id) {
    this.users$ = this.users$.filter(h => h.id !== id);
    this.rest.deleteUser(id).subscribe(res => {
          this.data.getUsers();
          }, (err) => {
          console.log(err);
        }
    );
  }

  edit(name:any){
      setTimeout(function() {
        name.editable=true;
        name.editableBtn=true;
    }, 1000);
  }

}
