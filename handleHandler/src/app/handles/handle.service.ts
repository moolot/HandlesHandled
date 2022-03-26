import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Handle } from './handle';

const api = '/api';

@Injectable()
export class HandleService {
  constructor(private http: HttpClient) {}

  getHandles() {
    return this.http.get<Array<Handle>>(`${api}/handles`);
  }

  deleteHandle(handle: Handle) {
    return this.http.delete(`${api}/handle/${handle.uid}`);
  }

  addHandle(handle: Handle) {
    return this.http.post<Handle>(`${api}/handle/`, handle);
  }

  updateHandle(handle: Handle) {
    return this.http.put<Handle>(`${api}/handle/${handle.uid}`, handle);
  }
}