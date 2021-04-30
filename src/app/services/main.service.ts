import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/User";
@Injectable({
  providedIn: 'root'
})
export class MainService {
  API_URI = `localhost:5555/api`
  constructor(private http: HttpClient) { }


  get_user(name: String ) {
    return this.http.get(`${this.API_URI}/`)
  }
  login_user(user: User) {
    return this.http.post(`${this.API_URI}/login-usuario`, user);
  }
  generate_user(user: User) {
    return this.http.post(`${this.API_URI}/registrar-usuario`, user);
  }
}
