import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  [x: string]: any;
  @Input() card: any;
  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick() {
    if (this.card.flipped || this['gameStarted']) {
      this.cardClicked.emit(this.card);
    }
  }
}

