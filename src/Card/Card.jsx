import React from "react";

const Card = ({ Feedback, info, src, HandleOpenCard, setCount, SetReview }) => {
  return (
    <div className="Card">
      <div>
        <img src={src} />
        <h1>{Feedback}</h1>
        <p>{info}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setCount(1);
            SetReview(false);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCount(2);
            SetReview(false);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setCount(3);
            SetReview(false);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setCount(4);
            SetReview(false);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setCount(5);
            SetReview(false);
          }}
        >
          5
        </button>
      </div>
      <input type="submit" placeholder="SUBMIT" onClick={HandleOpenCard} />
    </div>
  );
};

export default Card;
