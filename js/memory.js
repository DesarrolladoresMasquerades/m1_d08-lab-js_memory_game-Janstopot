class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.score = 0;
    this.guessedPair = 0;
    this.clickedPairs = 0;
    this.playedCards = [];
    this.shuffleCards()
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair() {
    console.log(this.playedCards)
    if(
      // alternative syntax: this.playedCards[].getAttribute('cata-card-name')
      this.playedCards[0].dataset.cardName === this.playedCards[1].dataset.cardName 
    ){
      return true
    }
  }

  checkIfGameOver() {
    // ------ add antoher logic here -------
    // ------ if (this.timer > 60 * 1000) return false
    // ------ if (this.clickedPairs > 5) return true
    return this.guessedPairs === this.cards.length / 2
  }
  playCard(card){
    let playResults = {"isPair": false, "playedCards": [] }
    if(this.playedCards.length < 2){
      this.playedCards.push(card)
    }
    if(this.playedCards.length === 2){
      this.clickedPairs += 1
      if(this.checkIfPair()){
        playResults = {"isPair": false, "playedCards": this.playedCards}
        this.score += 1
        this.guessedPairs += 1
        this.playedCards = [];
      }else{
        playResults = {"isPair": false, "playedCards": this.playedCards}
        this.playedCards = [];
      }
    }
    return playResults
  }


}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
