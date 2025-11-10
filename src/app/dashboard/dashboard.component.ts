import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isUserFormComplete = false

  constructor() { }

  ngOnInit(): void {
  }

  handleFormCompletion(isComplete: boolean) {
    this.isUserFormComplete = isComplete;
  }

}
