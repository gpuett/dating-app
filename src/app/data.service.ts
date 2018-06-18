import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';
import { User } from './user';

@Injectable()
export class DataService {

  private usersUrl = 'https://dating-app-server.herokuapp.com/users';

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
    .toPromise()
    .then(response => response.json() as User[])
    .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as User)
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

}
