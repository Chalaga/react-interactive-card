import { useState } from "react";
import Card from "./Card/Card";
import Star from "./assets/Star.svg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        src={Star}
        Review="How did we do?"
        info="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      />
    </>
  );
}

export default App;
