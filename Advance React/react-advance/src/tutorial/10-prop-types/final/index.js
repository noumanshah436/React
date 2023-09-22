import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
// import defaultImage from '../../../assets/default-image.jpeg';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index

/*
props type: allow us to validate our props we are passing to the component 
***********************************

If we are fetching data from API, we cannot simply rely on that data,
This data may contain items , with missing attributes , or wrong data.
As in case of this API(https://course-api.com/react-prop-types-example), the 
last item have some missing attributes.


So what we will do

*/