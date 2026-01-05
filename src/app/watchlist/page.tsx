'use client';

import { useState, ViewTransition, startTransition } from "react";

const testArray = [1, 2, 3, 4, 5];
const [showMoreButton, setShowMoreButton] = useState(false);

function showMore() {
  return (
    <ViewTransition>
      {testArray.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </ViewTransition>
  )
}

export default function Watchlist() {
  return (
    <div>
      <h1>La mia watchlist</h1>
      <button onClick={() => startTransition(() => setShowMoreButton(!showMoreButton))}>show more</button>
      {showMoreButton ? showMore() : null}
    </div>
  );
}
