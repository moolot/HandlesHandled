import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  handle: any;

  ngOnInit(): void {

    this.handle = JSON.parse(localStorage.getItem('handle'));
  }

}
