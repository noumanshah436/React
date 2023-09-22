// import React, { useEffect } from 'react'
import { useFetch } from './2-useFetch'

// custom hooks allow us to reuse the functionality
// it can be fetching data or saving to local storaage

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  console.log('start');

  const { loading, products } = useFetch(url)
  console.log(products)
  console.log("render");

  // useEffect(() => {
	// 	console.log("UseEffect of Example");
	// }, [ ]);

  return (
		<div>
			<h2>{loading ? "loading..." : "data"}</h2>
			{console.log("inside render")}
			{console.log(loading ? "loading..." : "data") }
		</div>
	);
}

export default Example
