import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentYear: any;

  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

}
