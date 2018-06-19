import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  users: User[];
  errorMessage: String;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.dataService.getUsers()
    .then(users => this.users = users,
    error => this.errorMessage = <any>error);
  }
  // addUsers(): void {
  //   this.dataService.addUserWithPromise(this.user)
  //   .then(user => {
  //     this.fetchUsers();
  //     this.reset();
  //     this.
  //   })
  // }

  submitUser(name, bio, age, orientation, imageUrl, interests) {
    let newUser: User = new User(name, bio, age, orientation, imageUrl, interests);

  }

}
