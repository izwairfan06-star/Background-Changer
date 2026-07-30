import { useState } from 'react'
import './App.css'
function App() {
 const[color,setcolor]=useState("white")
  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setcolor("Red")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Red"}} >Red</button>
          <button onClick={()=>setcolor("Green")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setcolor("Blue")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>setcolor("Olive")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Olive"}}>Olive</button>
          <button onClick={()=>setcolor("Grey")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Grey"}}>Grey</button>
          <button onClick={()=>setcolor("Pink")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={()=>setcolor("Purple")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Purple"}}>Purple</button>
          <button onClick={()=>setcolor("Lavender")} className='px-4 outline-none py-1 rounded-full text-black shadow-2xl' style={{backgroundColor:"Lavender", color:"black"}}>Lavender</button>
           <button onClick={()=>setcolor("White")} className='px-4 outline-none py-1 rounded-full text-black shadow-2xl' style={{backgroundColor:"White"}}>White</button>
            <button onClick={()=>setcolor("Black")} className='px-4 outline-none py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"Black"}}>Black</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
