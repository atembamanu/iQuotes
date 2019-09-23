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

  addNewQuote(iquote) {
    const quoteLength = this.iquotes.length;
    iquote.id = quoteLength + 1;
    iquote.quote = iquote.quote;
    iquote.author = iquote.author;
    iquote.user = iquote.user;
    iquote.date = new Date(iquote.date);
    this.iquotes.push(iquote);
  }

  upVote(iquote) {
    iquote.upvotes = iquote.upvotes + 1;
  }
  downVote(iquote) {
    iquote.downvotes = iquote.downvotes + 1;

  }
  // use a badge to show the best quote

  bestQuotechecker() {
    this.mostVotes = 0;
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.iquotes.length; i++) {
      if (this.iquotes[i].upvotes > this.mostVotes) {
        this.mostVotes = this.iquotes[i].upvotes;
        this.bestAuthor = this.iquotes[i].author;
        this.bestQuote = this.iquotes[i].quote;
        this.bestUser = this.iquotes[i].user;
        this.lowVotes = this.iquotes[i].downvotes;
        this.dateCreated = this.iquotes[i].createdAt;
      }
    }
  }
}
