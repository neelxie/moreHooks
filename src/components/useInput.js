import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState("");
  const reset = () => setValue(initialValue);
  const bind = {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
}

export default useInput;
