import React, { useState } from 'react';
import TodoList from './TodoList'
 
function App() {
  const [todos] = useState(["Todo"])
   
  return (
    <>
      <TodoList todosss ={todos}  />
      <input  type="text" />
      <button  >Add Todo</button>
      <button  >Clear Complete</button>
      <div>  left to do</div>
    </>
  )
}

export default App;
