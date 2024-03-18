import React from "react";

const Card = ({ Review, info, src, submitedreview}) => {
  return (
    <div className="Card">
      <div>
        <img src={src} />
        <h1>{Review}</h1>
        <p>{info}</p>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <input type="submit" placeholder="SUBMIT" />
    </div>
  );
};

export default Card;
