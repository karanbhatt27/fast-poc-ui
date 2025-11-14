import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-form/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userId = new FormControl('');
  loginError = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userId.valueChanges.subscribe(() => {
      this.loginError = false;
    })
  }

  login() {
    if(this.userId.value && this.userId.value.trim() !== '' && !isNaN(Number(this.userId.value))) {
    this.loginError =false;
    this.userService.userId = this.userId.value;
    this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}
