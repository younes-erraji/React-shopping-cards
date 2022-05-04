import React, { Component } from "react";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    cards: [
      { ID: 1, name: "First", count: 7, exists: true },
      { ID: 2, name: "Second", count: 0, exists: true },
      { ID: 3, name: "Third", count: 3, exists: false },
      { ID: 4, name: "Fourth", count: 4, exists: true },
      { ID: 5, name: "Fifth", count: 0, exists: true },
    ],
  };

  handleDelete = (ID) => {
    const cards = this.state.cards.filter((tag) => {
      return tag.ID !== ID;
    });

    this.setState({
      cards,
    });
  };

  handleReset = () => {
    const cards = this.state.cards.map((tag) => {
      tag.count = 0;
      return tag;
    });

    this.setState({
      cards,
    });
  };

  countedCards = () => {
    const count = this.state.cards.filter((card) => {
      return card.count !== 0;
    });

    return count.length;
  };

  handleIncrease = (card) => {
    const index = this.state.cards.indexOf(card);
    const cards = this.state.cards.map((c, i) => {
      if (index === i) {
        c.count++;
      }

      return c;
    });

    this.setState({
      cards,
    });
  };

  handleDecrease = (card) => {
    const index = this.state.cards.indexOf(card);
    const cards = this.state.cards.map((c, i) => {
      if (index === i && c.count > 0) {
        c.count--;
      }

      return c;
    });

    this.setState({
      cards,
    });
  };

  handleNewCard = () => {
    console.log("Nothing");
  };

  render() {
    return (
      <React.Fragment>
        <Cards
          cards={this.state.cards}
          onDecrease={this.handleDecrease}
          onIncrease={this.handleIncrease}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          addNewCard={this.handleNewCard}
          count={this.countedCards}
        />
      </React.Fragment>
    );
  }
}

export default App;
