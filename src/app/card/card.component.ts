import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  CWTDesc = `Here we analyze trends and summary results of CWT and its components: 
  OTDT, Seatbelt Time, and Drive Time.`;

  HustleDesc = `Here we analyze trends and summary results of Hustle Time and its 
  components: Seatbelt, ATD and Lot Time.`;

  TTDStatDesc = `Here we show stats of different metrics that affect TTDT of our drivers and stores.`;
  
  FeedbackDesc = `Here we show detailed customer ratings and comments.`;

  constructor() { }

  ngOnInit(): void {
  }

}
