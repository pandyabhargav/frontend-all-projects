import { useState } from 'react'

import './App.css'

function App() {
 let [count ,statecount] = useState(0);

const increse = () =>{
 
   if (count >= 20) {
    count = 20 - 1;
   }
    statecount(count + 1);

}
const decrese = () =>{
  if (count <= 1 ) {
    count = 0 + 1;
   }
 
  statecount(count -1);

}
  return (
    <>
      <h1>hello wold {count}</h1>
      <button onClick={increse}>increse</button>
      <button onClick={decrese}>decrese</button>
    </>
  )
}

export default App
