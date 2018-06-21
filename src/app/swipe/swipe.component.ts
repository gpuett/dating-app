import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
  providers: [DataService]
})
export class SwipeComponent implements OnInit {
  users;

  constructor(private dataService: DataService) { }

  getUsers() {
    return this.dataService.getUsers().then(users => this.users = users);
  }

  reject(user) {
    user.rejected = true;
  }

  ngOnInit() {
    this.getUsers();
  }

}
