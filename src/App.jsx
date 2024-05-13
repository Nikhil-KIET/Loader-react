import "./App.css";
 import React, { useEffect, useState } from 'react';
 import Loader from "./Loader";


function App() {

  const [len,setLen]=useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setLen((len)=>len+1);
    },120)
  },[])
  return (

    <div className=" flex justify-center  p-10">
      <Loader len={len}></Loader>
      
    </div>
  )
   

  }

export default App;
