import { Component } from '@angular/core';

@Component({
  selector: 'app-memorama',
  templateUrl: 'memorama.page.html',
  styleUrls: ['memorama.page.scss'],
})
export class MemoramaPage {
  cards: any[] = [];
  flippedCards: any[] = [];
  gameStarted = false;
  victory: boolean = false;

  constructor() {
    this.initializeCards();
  }

  initializeCards() {
    const images = [
      '../../assets/KeniaOs1.jpg',
      '../../assets/KeniaOs2.jpg',
      '../../assets/KeniaOs3.jpg',
      '../../assets/KeniaOs4.jpg',
      '../../assets/KeniaOs5.jpg',
      '../../assets/KeniaOs6.jpg',
      '../../assets/KeniaOs7.jpg',
      '../../assets/KeniaOs8.jpg',
    ];
    const doubledImages = images.concat(images);
    doubledImages.forEach((image) => {
      this.cards.push({ image: 'assets/cards/' + image, flipped: false });
    });
    this.shuffleCards();
  }



  cardClicked(card: any) {
      if (this.flippedCards.length < 2) {

      console.log("first")
      card.flipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {

        console.log("2")
        if (this.flippedCards[0].image === this.flippedCards[1].image) {

          // Match found
          setTimeout(() => {
            this.flippedCards.forEach((card) => (card.matched = true));
            this.flippedCards = [];
          }, 1000);
        } else {
          // No match found
          console.log('No match');
          setTimeout(() => {
            this.flippedCards.forEach((card) => (card.flipped = false));
            this.flippedCards = [];
          }, 1000);
        }
      }
      else{
        console.log(this.flippedCards.length);
      }
   
    }
  }
  startGame() {
    this.gameStarted = true;
    this.shuffleCards();
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  restartGame(){

  }
}
