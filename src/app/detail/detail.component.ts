import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user';
import {DataService} from '../data.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {



  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(){
    this.dataService.getUsers();
    // this.route.params
    // .switchMap((params: Params) => this.dataService.getUser(+params['id']))
    // .subscribe(user => this.user = user);
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
