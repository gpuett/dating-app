import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  users: User[];
  errorMessage: String;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.dataService.getUsers()
    .then(users => this.users = users,
    error => this.errorMessage = <any>error);
  }

  submitUser(name: string, bio: string, age: number, orientation: string, imageUrl: string, interests: string) {
    let newUser = new User(name, bio, age, orientation, imageUrl, interests);
    this.dataService.addUserWithPromise(newUser).then(user => this.users.push(user));
    this.router.navigate(['/browse']);
    console.log(newUser);
  }

}
