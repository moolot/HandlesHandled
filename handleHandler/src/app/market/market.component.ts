import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})

export class MarketComponent {

  title = 'angular-nodejs-example';

  handleForm = new FormGroup({
    handle: new FormControl(''),
    platform: new FormControl(''),
    seller: new FormControl(''),
    price: new FormControl(''),
    availability: new FormControl('')
  });

  handles: any[] = [];
  
}