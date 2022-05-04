import React from "react";
const Card = ({ card, children, count, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="d-flex align-items-center col-lg-4 col-md-3 col-sm-2 my-4 justify-content-between p-1 border font-weight-bold fs-2">
      <div>{children}</div>
      <span
        className={`badge badge-${card.count ? "primary" : "warning"}  m-1`}
      >
        {card.count ? card.count : "Zero"}
      </span>
      <button className="btn btn-primary m-1" onClick={() => onIncrease(card)}>
        +
      </button>
      <button
        className={`btn btn-${
          card.count ? "warning" : "secondary disabled"
        } m-1`}
        onClick={() => onDecrease(card)}
      >
        -
      </button>
      <button onClick={() => onDelete(card.ID)} className="btn btn-danger m-1">
        Delete
      </button>
    </div>
  );
};

export default Card;
