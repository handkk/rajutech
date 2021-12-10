import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentYear: any;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.title.setTitle('Rajesh Keerthi - Technology Analyst');
  }

}
