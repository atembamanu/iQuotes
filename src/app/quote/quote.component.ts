import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  iquotes: Quote[] = [
    // tslint:disable-next-line: max-line-length
    new Quote (1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt est vero placeat consequatur nulla facilis ea modi nobis repudiandae illo quae praesentium officiis reiciendis nostrum soluta, consequuntur, molestias eius', 'Atemba', 'John Doe' ),
    // tslint:disable-next-line: max-line-length
    new Quote (1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt est vero placeat consequatur nulla facilis ea modi nobis repudiandae illo quae praesentium officiis reiciendis nostrum soluta, consequuntur, molestias eius', 'Atemba', 'John Doe' ),

  ];

  ngOnInit() {
  }

}
