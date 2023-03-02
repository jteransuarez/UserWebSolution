import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
    { path: 'users', component: UsersComponent },
    { path: 'detail/:uid', component: UserDetailComponent },
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
