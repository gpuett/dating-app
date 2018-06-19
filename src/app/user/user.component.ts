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

  constructor(private dataService: DataService) { }

  getUsers() {
    return this.dataService.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

}
