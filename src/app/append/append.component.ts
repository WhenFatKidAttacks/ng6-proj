import { Component, OnInit } from '@angular/core';
import {Validators, 
  FormBuilder, 
  FormGroup, 
  FormArray} from '@angular/forms';

@Component({
  selector: 'app-append',
  templateUrl: './append.component.html',
  styleUrls: ['./append.component.scss']
})
export class AppendComponent implements OnInit {

  tableProd;
  index;
  row;
 
  form:FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      items:this._fb.array([this.getItems()])
    });
  }

  getItems() {
    return this._fb.group({
      parts:[''],
      qnty:['']
    });
  }

  addField(){
    // this.tableProd = document.getElementById('tableProd');
    // this.index = this.tableProd.rows.length;
    // this.row = this.tableProd.insertRow(this.index);

    // this.row.innerHTML = `
    // <th><mat-form-field style="width: 60%">
    //      <input matInput [formControl]='parts`+this.index+`'>
    // </mat-form-field></th>
    // <th>
    //     <mat-form-field style="width: 20%">
    //       <input matInput [formControl]='qnty`+this.index+`'>
    //     </mat-form-field>
    //   </th>
    // `
    const control = <FormArray>this.form.controls['items'];
    control.push(this.getItems());
  }

}
