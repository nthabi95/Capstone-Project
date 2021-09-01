import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  users: Array<User> = [];

  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this._http.get<User[]>(`http://localhost:3000/users`).subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => {
      console.log(error);
    })
  }

  login() {
    if (this.isUserExists()) {
      alert('You are loggedIn Sucessfully.');
      localStorage.setItem('isLoggedIn', "true");
      this._router.navigate(['/home']);
    } else {
      alert('Login Failed. You can try again.');
    }
  }

  isUserExists() {
    for (const user of this.users) {
      if (user.username == this.user.username && user.password == this.user.password) {
        return true;
      }
    }
    return false;
  }

}
