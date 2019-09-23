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

  iquotes: Quote[] = [
    new Quote(1, 'Have no fear of perfection, you will never reach it', 'Salvador Dali', 'Navido Chief', new Date(2019, 7, 22), 0, 0),
    new Quote(2, 'A dead clock is right twice a day', 'Thomas Edison', 'Atemba Emmanuel', new Date(2019, 7, 20), 0, 0),
    new Quote(3, 'You miss 100% of the shots you do not take', 'Lee Harvey', 'Khakai Salim', new Date(2019, 5, 20), 0, 0)
  ];

  ngOnInit() {
  }

}
