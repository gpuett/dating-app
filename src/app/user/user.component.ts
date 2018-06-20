import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users;
  selectedUser: User;

  constructor(private dataService: DataService, private router: Router) { }

  getUsers() {
    let apiUsers = this.dataService.getUsers().then(users => this.users = users);
    return apiUsers;
  }

  // private getIdOfUser = (userId: string) => {
  //   return this.users.findIndex((user) => {
  //     return user.id === userId
  //   });
  // }


  deleteUser = (userId: number) => {
    this.dataService.deleteUser(userId);
    this.router.navigate(['/']);
  }


  ngOnInit() {
    this.getUsers();
  }

}
