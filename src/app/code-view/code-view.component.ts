import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('RK - Code View');
  }

}
