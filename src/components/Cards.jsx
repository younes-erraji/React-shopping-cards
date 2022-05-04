import React from "react";
import Card from "./Card";

function Cards(props) {
  const cards = props.cards.map((card, index) => {
    return (
      <Card
        key={index}
        card={card}
        onDelete={props.onDelete}
        onIncrease={props.onIncrease}
        onDecrease={props.onDecrease}
      >
        <h4>#{card.name}</h4>
      </Card>
    );
  });
  return (
    <React.Fragment>
      <div className="container my-4">
        <div className="row">
          <div className="col-6">
            <label htmlFor="CardName" className="form-label">
              Card name
            </label>
            <input
              type="text"
              className="form-control"
              id="CardName"
              placeholder="Card name..."
            />
          </div>
          <div className="col-6">
            <label htmlFor="CardName" className="form-label">
              Card Count
            </label>
            <input
              type="number"
              className="form-control"
              id="CardCount"
              placeholder="Card count..."
            />
          </div>
        </div>
        <div>
          {props.cards.length === 0 && (
            <p className="alert alert-primary m-2">Add a new Card</p>
          )}
        </div>
      </div>
      <div className="container mt-3 mb-3">
        <span className="badge badge-warning">{props.count()}</span>
        <button onClick={props.onReset} className="btn btn-primary m-2">
          Reset
        </button>
        <button onClick={props.addNewCard} className="btn btn-success m-2">
          Add
        </button>
      </div>
      <hr className="container" />

      <div className="container">
        <section className="row my-4">
          {cards.length ? (
            cards
          ) : (
            <p className="alert alert-danger m-2">There's No Data</p>
          )}
        </section>
      </div>
      <div className="container">
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Cards;
