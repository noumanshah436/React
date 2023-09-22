import React from "react";
import defaultImage from "../../../assets/default-image.jpeg";

import PropTypes from "prop-types"; // this is the import from the paskage
// PropTypes : allow us to validate our props, we are passing to the component

const Product = ({ image, name, price }) => {
	// if image is there , then get the url
	// otherwise it is undefined
	const url = image && image.url;

	return (
		<article className="product">
			<img src={ url || defaultImage} alt={name || "default name"} />
			<h4>{name}</h4>
			<p>${price || 3.99}</p>
		</article>
	);
};

// and here propTypes is the property on the component
// this is just to tell which prop is missing, or invalid ( show warning in console)
Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
/*
https://reactjs.org/docs/typechecking-with-proptypes.html

PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. 
For performance reasons, propTypes is only checked in development mode.



*/
