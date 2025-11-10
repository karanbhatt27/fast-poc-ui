import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user-form/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: any;
  userId!: number;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.userId = this.userService.userId;
    this.loadResult();
  }

  loadResult() {
    this.http
      .get<any>(`http://localhost:8000/api/load-form/${this.userId}`)
      .subscribe({
        next: (data) => {
          if (data) this.result = data;
        },
        error: (err) => console.error('Failed to load form', err),
      });
  }
}
