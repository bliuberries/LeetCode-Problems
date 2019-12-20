class Blackjack extends React.Component {

  /*
    X  need a deck of cards		
    X  ability to shuffle cards
    determine when cards are dealt out a certain percentage of the deck is left
      to add discarded cards back to the original deck and shuffle again
    a dealer
    account for first card dealt out being visible to everyone for dealer and then 
    hiding the second card
    rules where dealer is set to hit below 16 or below 17
    how to determine a 'bust'
    what happens when a player busts
    what happens when the dealer busts
      ***Advanced***
    being able to account for multiple players
    account for splits scenarios
    
    */

  constructor(props) {
    super(props)
    this.state = {
      deck: [{ DA: 1 || 11 }, { D2: 2 }, { D3: 3 }, { D4: 4 }, { D5: 5 }, { D6: 6 }, { D7: 7 }, { D8: 8 }, { D9: 9 }, { D10: 10 }, { DJ: 10 }, { DQ: 10 }, { DK: 10 },
      { SA: 1 || 11 }, { S2: 2 }, { S3: 3 }, { S4: 4 }, { S5: 5 }, { S6: 6 }, { S7: 7 }, { S8: 8 }, { S9: 9 }, { S10: 10 }, { SJ: 10 }, { SQ: 10 }, { SK: 10 },
      { HA: 1 || 11 }, { H2: 2 }, { H3: 3 }, { H4: 4 }, { H5: 5 }, { H6: 6 }, { H7: 7 }, { H8: 8 }, { H9: 9 }, { H10: 10 }, { HJ: 10 }, { HQ: 10 }, { HK: 10 },
      { CA: 1 || 11 }, { C2: 2 }, { C3: 3 }, { C4: 4 }, { C5: 5 }, { C6: 6 }, { C7: 7 }, { C8: 8 }, { C9: 9 }, { C10: 10 }, { CJ: 10 }, { CQ: 10 }, { CK: 10 }
      ],
      dealer: [],
      players: 2,
      hand: [],
      discard: [],
      turn: 0
    }
  }

  shuffle() {
    const { deck } = this.state;
    let m = deck.length, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }
  hit() {

  }
  stay() {

  }
  deal() {

  }
  dealerMoves() {
    
  }
  componentDidMount() {
    this.shuffle();
  }
  render() {
    return (
      <div></div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))
