import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{title}}
    <span style='font-size:80px;'>&#9997;</span>
    </h2>
    <button class="btn btn-large btn-primary" id="iCreate">CREATE IQUOTE</button>
    <p>Read or create your own quotes</p>
    <div class='well hoverwell thumbnail'>
      <app-quote></app-quote>
    </div>

  `,
  styles: [`
  #iCreate{ float:right; font-size: 20px;}
  `]
})
export class AppComponent {
  title = 'iQuote';
}
