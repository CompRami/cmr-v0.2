import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    let test = JSON.stringify({ email: username, password: password });
    return this.http.put('https://devel-api.cmr.ro/api/auth', JSON.stringify({ email: username, password: password }))
      .map((response: Response) => {
        let user = response.json();
        if ( user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
