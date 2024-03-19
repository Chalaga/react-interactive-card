import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Star from "./assets/Star.svg";
import RevewCard from "./RevewCard/RevewCard";
import Onlinepayment from "./assets/Onlinepayment.svg";

function App() {
  const [count, setCount] = useState(0);
  const [Review, SetReview] = useState(true);
  return (
    <>
      {Review ? (
        <>
          <Card
            SetReview={SetReview}
            setCount={setCount}
            src={Star}
            Feedback="How did we do?"
            info="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          />
        </>
      ) : (
        <>
          <RevewCard
            point={count}
            thankyou="Thank you!"
            paragraph="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
            logosrc={Onlinepayment}
          />
        </>
      )}
    </>
  );
}

export default App;
