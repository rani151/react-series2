import {  useState, useCallback, useEffect,useRef } from 'react'
 
 

function App() {
  const [length, setLength] = useState(8)
  // number
  const [numberAllowed, setNumberAllowed ] = useState(false);

// characters 
  const [charAllowed , setCharAllowed ] = useState(false);

  // password
  const [ password, setPassword ] = useState("");
  // useref hook
  const passwordRef= useRef(null)

  // usecallback hook 
   const passwordGenerator = useCallback( () =>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst"
    // condition
    if(numberAllowed)str += "0123456789"
    if(charAllowed)str += "!@#$%^&*()-_=+;:"

    // for loop
    for(let i=1; i<=length; i++){
      //for making password
      let char =  Math.floor(Math.random()*str.length+1)

      // to pick value through string
      pass += str.charAt(char)

    }


    setPassword(pass)


  },
   [length, numberAllowed,charAllowed,setPassword])

  //  for optimizing copy
   const copyPasswordToClipboard =useCallback(() =>{
    // for showing selecting effect
    passwordRef.current?.select();
    // range for slecting value
    passwordRef.current?.setSelectionRange(0,99)

    window.Navigator.clipboard.writeText(password)
   },[password])

   //  useeffect hook
    useEffect(() => {passwordGenerator()}, [length, numberAllowed,charAllowed,passwordGenerator])
  //  ----------------------------------------------------------------------------------------------------------
   return (
    
    <div className='w-full max-wd-md mx-auto shadow-md rounded-lg px-4 my-5
    text-orange-500  bg-gray-800'> 
    <h1 className='text-white text-center my-3'>PASSWORD GENRATOR</h1>
    <div className="flex shadow rounded-lg  overflow-hidden mb-4"> 

     <input 
     type="text" 
     value={password}
     className="outline-none w-full "
     placeholder="password"
     readOnly
     ref={passwordRef} 
     />

     <button 
    //  onclick for copy
    onClick={copyPasswordToClipboard} 
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>

   <div className=' flex text-sm gap-x-2 '>
    <div className=' flex items-center gap-x-1 '>

     <input 
     type="range"
     min={6}
     max={40}
     value={length}
     className='cursor-pointer'

     onChange={(e) =>{setLength(e.target.value)}}
     />
     
     <label>length:{length}</label>
    </div>
     
     <div className=' flex items-center gap-x-1'>
      <input 
      type="checkbox" 
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={() =>{
        setNumberAllowed((prev)=>!prev);
      }}

      />
      <label htmlFor="numberInput">Numbers</label>
     </div>

     <div className=' flex items-center gap-x-1'>
      <input 
      type="checkbox" 
      defaultChecked={charAllowed}
      id="charInput"
      onChange={() =>{
        setNumberAllowed((prev)=>!prev);
      }}

      />
      <label htmlFor="charInput">Characters</label>
     </div>

   </div>
    </div>
  
  )
}

export default App
