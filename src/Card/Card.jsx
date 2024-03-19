import React from "react";

const Card = ({ Feedback, info, src, setCount, SetReview }) => {
  return (
    <div className="Card">
      <div>
        <img className="star" src={src} />
        <h1>{Feedback}</h1>
        <p>{info}</p>
      </div>
      <div className="ButtonContainer">
        <button
          onClick={() => {
            setCount(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCount(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setCount(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setCount(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setCount(5);
          }}
        >
          5
        </button>
      </div>
      <input
        className="input"
        type="submit"
        placeholder="SUBMIT"
        onClick={() => SetReview(false)}
      />
    </div>
  );
};

export default Card;
