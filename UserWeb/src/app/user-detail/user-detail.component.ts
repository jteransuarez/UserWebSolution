import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  @Input() user?: User;

  ngOnInit(): void {
    //this.getUser();
  }

  getUser(): void {
    const uid = String(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(uid).then(user => this.user = user);
  }

}
