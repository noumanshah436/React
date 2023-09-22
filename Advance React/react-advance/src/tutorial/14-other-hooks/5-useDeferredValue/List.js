import { useMemo, useDeferredValue, useEffect } from "react";

function List({ input }) {
  const LIST_SIZE = 20000;
  
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  // just for testing
  useEffect(()=>{
    console.log(`input:${input}\nDeffered: ${deferredInput}`);
  }, [deferredInput, input]);

  return list;
}

export default List;


//  if my input changed, useDeferredValue will return the last value when the app rendered.

// If the 100ms has passed since last render and nothing happened, so now react know that it been long enough, let me give you the new value, and
//  then the deferredInput will set to the new input value and then useMemo will recalculate the list and again render the List.

// using deffered value you are saying that this input is of low priority,
//  I don't care if this gets updated immediately or it takes a little while for it to update
