import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
// object

let myObj = {
  username: "riya",
  age:21
}

let newarr = [1,2,3,4]


  return (
   <>
   <h1 className='bg-green-400  p-5 rounded-xl mb-4 border-4 border-indigo-500/100 '>
    TAILWIND + REACT
   </h1>
   
   <Card username="rani" btnText="Click Me" />
    
   
   
   </>
  )
}

export default App
