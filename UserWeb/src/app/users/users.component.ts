import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute) { }

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  selectedUser!: User;

  //onSelect(user: User): void {
    
  //}

  editUser(user: any) {
    this.selectedUser = user;
    if (this.selectedUser)
      this.router.navigate(['edit', this.selectedUser?.uid], { relativeTo: this.route });
    else
      this.router.navigate(['add'], { relativeTo: this.route });
  }


  delete(useruid: string) {
    this.userService.delete(useruid).then(res => {
      this.getUsers();
    }, error => {
      console.log(error);
    });
  }
}
