import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { testInsertFromLocal } from '../index.js';
const paymentMethod = {
  "id": "pm_1KQhWA2eZvKYlo2CsCA8Fqvp",
  "object": "payment_method",
  "billing_details": {
      "address": {
          "city": null,
          "country": null,
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
      },
      "email": "jenny@example.com",
      "name": null,
      "phone": "+15555555555"
  },
  "card": {
      "brand": "visa",
      "checks": {
          "address_line1_check": null,
          "address_postal_code_check": null,
          "cvc_check": "pass"
      },
      "country": "US",
      "exp_month": 8,
      "exp_year": 2023,
      "fingerprint": "Xt5EWLLDS7FJjR1c",
      "funding": "credit",
      "generated_from": null,
      "last4": "4242",
      "networks": {
          "available": [
              "visa"
          ],
          "preferred": null
      },
      "three_d_secure_usage": {
          "supported": true
      },
      "wallet": null
  },
  "created": 123456789,
  "customer": null,
  "livemode": false,
  "metadata": {
      "order_id": "123456789"
  },
  "type": "card"
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';
  handle: any;

  setHandle(handle) {
    this.handle = handle;
  }

  getHandle() {
    return this.handle;
  }

  getHandles() {
    return this.http.get(this.rootURL + '/handles');
  }

  addHandle(handle: any) {
    return this.http.post(this.rootURL + '/insertPayment', {handle});
  }

  editHandle(handle: any) {
    return this.http.put(this.rootURL + '/handle', {handle});
  }

  deleteHandle(handleId: any) {
    console.log('deleting handle:::', handleId);
    return this.http.delete(`${this.rootURL}/handle/${handleId}`);
  }

  getSettings(url: string) {
    return this.http.get(this.rootURL + '/' + url);
  }
  
}
