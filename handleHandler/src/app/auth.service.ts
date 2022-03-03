import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username: any, password: any) {
    //post details to API
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }
}
