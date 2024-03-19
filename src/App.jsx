import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Star from "./assets/Star.svg";
import RevewCard from "./RevewCard/RevewCard";

function App() {
  const [count, setCount] = useState(0);
  const [Review, SetReview] = useState(true);
  // console.log(count);
  // console.log(Review);

  // const HandleOpenCard = () => {
  //   SetReview(true);
  // };

  useEffect(() => {}, []);

  return (
    <>
      {Review ? (
        <>
          <Card
            SetReview={SetReview}
            setCount={setCount}
            // HandleOpenCard={HandleOpenCard}
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
            logosrc={Star}
          />
        </>
      )}
    </>
  );
}

export default App;
