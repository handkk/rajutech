import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import * as moment from 'moment';


@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  references: any[] = [
    {
      title: 'Console log Remove',
      code: `window.console.log = function(){}`
    },
    {
      title: 'Date format with moment NPM',
      code: `
      const date = new Date();
      const format1 = "YYYY-MM-DD HH:mm:ss";
      const format2 = "YYYY-MM-DD";
      const format3 = 'MM/DD/YYYY';
      const datef = moment().format(format1);
      `
    }
  ]

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('RK - Code View');
  }

  copyCode(copyText: string) {
    navigator.clipboard.writeText(copyText);
  }

}
