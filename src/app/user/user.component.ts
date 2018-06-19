import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;


  constructor(private dataService: DataService) { }

  getUsers() {
    let apiUsers = this.dataService.getUsers().then(users => this.users = users);
    console.log(this.users);
    return apiUsers;
  }

  // private getIdOfUser = (userId: string) => {
  //   return this.users.findIndex((user) => {
  //     return user.id === userId
  //   });
  // }

  selectUser(user: User) {
    this.selectedUser = user;
  }


  ngOnInit() {
    this.getUsers();
  }

}
