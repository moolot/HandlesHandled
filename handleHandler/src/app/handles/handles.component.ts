import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-handles',
  templateUrl: './handles.component.html',
  styleUrls: ['./handles.component.css']
})

export class HandlesComponent implements OnInit {

  handle: any;
  platform: any;
  seller: any;
  price: any;
  availability: any;
  handleForm: any;

  constructor() { }

  ngOnInit() {
    this.handleForm = new FormGroup({
      handle: new FormControl("@"),
      platform: new FormControl(""),
      seller: new FormControl("@"),
      price: new FormControl("$"),
      availability: new FormControl("")
    });
  }
  
  onClickSubmit(data: any) { this.handle = data.handle }
}
