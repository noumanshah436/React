import { useDebugValue, useEffect } from "react";

const useLogger = (value) => {
  // useDebugValue can be used to display a label for custom hooks in React DevTools.
  useDebugValue(value);

  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default useLogger;

// https://www.youtube.com/watch?v=QmIHmiLdLHE
