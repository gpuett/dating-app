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

  public show: boolean = false;

  constructor(private dataService: DataService) { }

  getUsers() {
    return this.dataService.getUsers().then(users => this.users = users);
  }

  toggle(target) {
    this.show = !this.show;
  }

  ngOnInit() {
    this.getUsers();
  }

}
