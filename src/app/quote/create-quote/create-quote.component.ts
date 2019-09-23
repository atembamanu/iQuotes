import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../../quote';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  closeResult: string;

  newQuote = new Quote(0, '', '', '', new Date(), 0, 0);

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);

  }

  resetForm() {
    this.newQuote.user = '';
    this.newQuote.author = '';
    this.newQuote.quote = '';
  }

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
