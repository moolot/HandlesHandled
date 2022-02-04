import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get(this.rootURL + '/todos');
  }

  addHandle(handle: any) {
    return this.http.post(this.rootURL + '/todos', {handle});
  }

  editHandle(handle: any) {
    return this.http.put(this.rootURL + '/todo', {handle});
  }

  deleteHandle(handleId: any) {
    console.log('deleting handle:::', handleId);
    return this.http.delete(`${this.rootURL}/todo/${handleId}`);
  }

  getSettings(url: string) {
    return this.http.get(this.rootURL + '/' + url);
  }

}
