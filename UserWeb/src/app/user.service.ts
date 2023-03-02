import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUsers() {
    let url = environment.baseUrl + "users";
    return this.http.get<User[]>(url).toPromise();
  }

  getUser(uid: string) {
    let url = environment.baseUrl + "user?uid=" + uid;
    return this.http.get<User>(url).toPromise();
  }

  editUser(data: any) {
    let url = environment.baseUrl + "edit";
    return this.http.post<any>(url, data).toPromise();
  }

  delete(useruid: string) {
    let url = environment.baseUrl + "delete?uid=" + useruid;
    return this.http.post<any>(url, null).toPromise();
  }




}
