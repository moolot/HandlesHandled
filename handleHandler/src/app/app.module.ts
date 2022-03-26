import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HandlesComponent } from './handles/handles.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaymentsComponent } from './payments/payments.component';
import { MarketComponent } from './market/market.component';
import { ModeratorComponent } from './moderator/moderator.component';


@NgModule({
  declarations: [
    AppComponent,
    HandlesComponent,
    MarketComponent,
    PaymentsComponent,
    ModeratorComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }