import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { UserDTO } from '../../UserDTO';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  useruid: string;
  user: User = null;


  userForm: FormGroup;
  username: FormControl;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;

  submitted = false;

  constructor(private userService: UserService, private router: Router ,private route: ActivatedRoute) {
    this.useruid = this.route.snapshot.paramMap.get('uid');
  }

  ngOnInit() {
    this.loadData();
    this.loadFormsControls();
  }

  loadFormsControls() {
    this.username = new FormControl(null, [Validators.required]);
    this.firstname = new FormControl(null, [Validators.required]);
    this.lastname = new FormControl(null, [Validators.required]);
    this.email = new FormControl(null, [Validators.required, Validators.email]);

    this.userForm = new FormGroup({
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email
    });

  }

  loadData() {
    if (this.useruid) {
      this.userService.getUser(this.useruid).then(res => {
        this.user = res;

        this.username.setValue(this.user.username);
        this.firstname.setValue(this.user.firstName);
        this.lastname.setValue(this.user.lastName);
        this.email.setValue(this.user.email);

      }, error => {
        console.log(error);

      });
    }
  }

  save() {
    this.submitted = true;
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      let useruid = this.user ? this.user.uid : null;
      let user: UserDTO = {
        Uid: useruid,
        Username: this.username.value,
        FirstName: this.firstname.value,
        LastName: this.firstname.value,
        FullName: this.firstname.value + ' ' + this.lastname.value,
        Email: this.email.value
      };

      this.userService.editUser(user).then(res => {
        if (useruid)
           this.router.navigate(['../../'], { relativeTo: this.route });
         else
           this.router.navigate(['../'], { relativeTo: this.route });
        }, error => {
          console.log(error);
        });
    }
  }



}
