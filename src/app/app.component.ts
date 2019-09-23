import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  #header{margin-bottom  : 40px}
  `]
})
export class AppComponent implements OnInit {

  constructor() {}
  title = 'iQuote';
  ngOnInit(): void {
  }



}
