import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  // hooks [useState]
  let [counter, setCounter] = useState(10)

  // let counter = 10;
  const addValue = () =>{
    console.log("clicked", counter);
    // counter = counter + 1;

    // counter update 
    setCounter(counter + 1)

  }

  // remove 
  const removeValue = () =>{
    setCounter(counter - 1)
  }


  return (
    <>
       <h1> hello! REACT: </h1>

       <h2>add value:{counter}</h2>

       <button
       onClick = {addValue}
       >Add value{counter}</button>
       <br />
       <button
       onClick = {removeValue}
       >Remove value{counter}</button>
       <p>footer:{counter}</p>
    </>
  )
}

export default App

