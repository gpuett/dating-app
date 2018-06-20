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

  updateUser(userId: number, name: string, bio: string, age: number, orientation: string, imageUrl: string, interests: string){
    let userToUpdate = new User(name, bio, age, orientation, imageUrl, interests);
    this.dataService.updateUser(userId, userToUpdate);
    this.router.navigate(['/']);
  }

  deleteUser = (userId: number) => {
    this.dataService.deleteUser(userId);
    this.router.navigate(['/']);
  }


  ngOnInit() {
    this.getUsers();
  }

}
