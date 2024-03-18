import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Star from "./assets/Star.svg"
import RevewCard from "./RevewCard/RevewCard";

function App() {
  const [count, setCount] = useState(0);
  const [Review, SetReview] = useState(false);

  const submitedreview = () => {
    SetReview(!false)
  }

  useEffect (() => {}, [])

  return (
    <>
      <Card
        src={Star}
        Review="How did we do?"
        info="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      />

      <RevewCard point={count}  />
    </>
  );
}

export default App;
