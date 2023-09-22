import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  console.log('App');
  
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {


    console.log('before setLoading');
    setLoading(true)  //  as value of useState is same , don't cause re-render
    console.log("after setLoading"); 

    try {
			const response = await fetch(url);
			// console.log('response', response);

			const tours = await response.json();
			// console.log('tours', tours);   //  array of objects
			// tours (5) [{…}, {…}, {…}, {…}, {…}]

			console.log("before setLoading 2");
			setLoading(false); //  cause re-render
			console.log("after setLoading 2"); 

      console.log('before set Tours');
			setTours(tours); //  cause re-render
      console.log("after set Tours");

		} catch (error) {
			setLoading(false); //  cause re-render
			console.log(error);
		}
  }

  useEffect(() => {
    console.log('useEffect');
    
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
