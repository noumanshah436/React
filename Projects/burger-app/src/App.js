import React from 'react'
import BurgerApp from './componets/BurgerApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BurgerApp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
