import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  #header{margin-bottom  : 40px}
  #iCreate{ float:right; font-size: 20px;}
  span#closeModal{font-size: 24px;}
  .btnIsave{background-color: #f9c128}
  `]
})
export class AppComponent implements OnInit {
  title = 'iQuote';

  constructor(private modalService: NgbModal) {}

  closeResult: string;

  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
