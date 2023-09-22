import React, { useState, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// https://kentcdodds.com/blog/usememo-and-usecallback

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
	return (
		data.reduce((total, item) => {
			const price = item.fields.price;
			if (price >= total) {
				total = price;
			}
			return total;
		}, 0) / 100
	);
};

const Index = () => {
  //
  const { products } = useFetch(url);
  // const { products } = React.memo(useFetch(url));
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // 1) why useMemo:
	//		 calculateMostExpensive is a heavy function and it gets called every time we render the component
	//		 To avoid this re-invocation we will save the result of that function using useMemo.
  // 2) how it works?
	// 		using useMemo it will run the callback function, for the first time when we render the
  // 		component and only if the data we are passing in using dependency array is changed.
  // 		we are also saving the data return by the function
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
	// useEffect(() => {
	//   console.count('hello from big list');
	// });

	return (
		<section className="products">
			{products.map((product) => {
				return (
					<SingleProduct
						key={product.id}
						{...product}
						addToCart={addToCart}
					></SingleProduct>
				);
			})}
		</section>
	);
});

const SingleProduct = ({ fields, addToCart }) => {
	let { name, price } = fields;
	price = price / 100;
	const image = fields.image[0].url;

	// useEffect(() => {
	//   console.count('hello from product');
	// });
	return (
		<article className="product">
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>${price}</p>
			<button onClick={addToCart}>add to cart</button>
		</article>
	);
};
export default Index;

/*

React.memo:---- To avoid re-render a component if the props we are passing it , are not changing ( as with BigList component).

React.memo is a function and we use pass it our component (wrapping) .

working :
Memo will check at each render ( when parent component render ), the value of props.
If the props value do not change , we are not triggerring the re-render that component.

SO in this example ,as we are changing the state value (count) , which cause Index component to
re-render and so BigList will also re-render, but we are not changing the props ,
so we can avoid BigList to re-render by using React.memo by wrapping BigList component with it.

See Setup folder component to see only momo function.
***********************************

useCallback:--- If the given function is not changed, it will not recreat it from the scratch ( in case of re-renderring of the component where it is reside )

Every time props or state changes, component re-renders
 so,
when we are calling addToCart function inside SingleProduct, it will change cart state value and the index component will re-render,
and the addToCart function will be recreated from the scratch , and BigList thinks that this function has changed , so it will re-render
the BigList also , so for the solution we will use useCallback.

useCallback check that the function is changed or not ?
If this function is not changed, it will not recreat it from the scratch
, but if it is changed , then it will be recreated from scatch
so
1) we wrap our function with useCallback( )
2) we also pass , it the dependency list,   ---  useCallback( function , dep_list )
    so that if that value changes(in dependency list ) , we want our function to recreate one more time


***************************************


*/
