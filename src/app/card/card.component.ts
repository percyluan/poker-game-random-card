import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../modal/card-info';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardInfo:Deck;
  constructor() { }

  ngOnInit(): void {
  }

}
