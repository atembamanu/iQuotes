import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote/quote-details/quote-details.component';

import { CountDatePipe } from './shared/count-date.pipe';
import { HighlightBestQuoteDirective } from './highlight-best-quote.directive';
import { CreateQuoteComponent } from './quote/create-quote/create-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    CountDatePipe,
    HighlightBestQuoteDirective,
    CreateQuoteComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule
  ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
