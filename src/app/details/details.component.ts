import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Data } from "../data.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$:Object;
  @Input() hero: Data[];

  constructor(private route: ActivatedRoute, private data:DataService) { 
    this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    /*this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    );*/
    this.user$=this.data.getUser(this.user$);
    console.log(this.user$);
  }

}
