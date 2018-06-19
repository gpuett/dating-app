import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';
import { User } from './user';

@Injectable()
export class DataService {

  private usersUrl = 'https://dating-app-server.herokuapp.com/users';

  constructor(private http: Http) { }

// get("api/users") read
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
    .toPromise()
    .then(response => response.json() as User[])
    .catch(this.handleError);
  }

//get("api/users/:id") read
  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as User)
    .catch(this.handleError)
  }

// post("api/users/new") create
  addUserWithPromise(user: User): Promise<User>{
    let headers = new Headers({'Content-Type': 'text/plain'});
    let options = new RequestOptions({headers: headers});
    const url = `${this.usersUrl}/new`;
    return this.http.post(url, user, options).toPromise().then(this.extractData).catch(this.handleError);
  }

  //post("api/users/:id/delete") delete


  //post("api/users/:id/update") update

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
