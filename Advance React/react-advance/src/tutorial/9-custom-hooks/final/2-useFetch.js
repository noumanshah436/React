import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  console.log("inside usefectch custom hook");

  // now using useCallback , this function is recreated from scratch if url chnages.
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();

    console.log("before setproducts");
    setProducts(products);
    console.log("after setproducts");

    console.log("before setLoading");
    setLoading(false);
    console.log("after setLoading");
  }, [url]);

  useEffect(() => {
    console.log("UseEffect of custom hook");
    getProducts();
  }, [url, getProducts]);

  // 2nd parameter says that , useEffect will run whenever this hook(or function)
  // will change or whenever url is changes or
  // inside getProducts function useState setValue function is called

  //  when ever setProduct or setLoading is called
  // this hook(or function) will re-render( means return my object first )

  console.log("return from hook");
  return { loading, products };
};


/*
After The last video on callBack:

Before using useCallback on getProducts if we simple add getProducts in dependency array of useEffect
, we would get a infinite loop . Why ?

Because getProducts function would be created from scratch each and every time we render the component.

Now using useCallback we would only create a new function when the url changes.


*/


// React Hook useEffect has a missing dependency: 'getProducts'. Either include it or remove the dependency array
