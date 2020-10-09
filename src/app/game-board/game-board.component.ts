import { Component, OnInit } from '@angular/core';
import { Deck, cards } from '../modal/card-info';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  dealtCard:Deck;
  cardLeft:number = cards.length;
  constructor() { }

  ngOnInit(): void {
  }
  deal() {
    const dealResult = this.randomCard()
    if(dealResult) {
      this.dealtCard = dealResult;
    }
  }
  flush() {
    window.location.reload();
  }
  randomCard() {
    let randomNumber = Math.floor(Math.random() * cards.length);
    let dealtCard = cards.slice(randomNumber, randomNumber + 1);
    cards.splice(randomNumber, 1);
    this.cardLeft = cards.length;
    return dealtCard[0];
  }

}
