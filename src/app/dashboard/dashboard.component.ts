import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isUserFormComplete = false
  isUserDetailLoaded = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleFormCompletion(isComplete: boolean) {
    this.isUserFormComplete = isComplete;
  }

    onTabChange(event: MatTabChangeEvent) {
    if (event.index === 1) {
      this.isUserDetailLoaded = true;
    } else this.isUserDetailLoaded = false;
  }

}
