import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTwo() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default DocTwo