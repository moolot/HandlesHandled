import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HandlesComponent } from './handles/handles.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MarketComponent } from './market/market.component';
import { HandleService } from './handles/handle.service';


@NgModule({
  declarations: [
    AppComponent,
    HandlesComponent,
    MarketComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],

  providers: [HandleService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }