import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: EditUserComponent },
    { path: 'users/edit/:uid', component: EditUserComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
