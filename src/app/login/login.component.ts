import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-form/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId = new FormControl('');

  constructor(private router: Router, private userService: UserService) {}

  login() {
    if(this.userId.value) {
    this.userService.userId = this.userId.value;
    this.router.navigate(['/dashboard'])
    }
  }
}
