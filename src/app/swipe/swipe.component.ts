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
  liked = false;

  constructor(private dataService: DataService) { }

  getUsers() {
    return this.dataService.getUsers().then(users => this.users = users);
  }
  likeUser() {
    const active = document.querySelector('.swiper');
    const pos = (num) => num += 100;
    const isActive = () => active.setAttribute('style', "transform: translateX(-" + pos(100) + '%)');
    isActive();
  }

  ngOnInit() {
    this.getUsers();
  }

}
