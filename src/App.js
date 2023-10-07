import React, {  useState, useEffect } from 'react';

import './App.css';


function App() { 
  const[text,setText] = useState('');
  const[name,setName] = useState('Love');

  function changeHandler(event){ 
    setText(event.target.value); 
    console.log(text); 
  } 
  //variation 1 => every Render
  // useEffect(()=>{
  //   console.log("UI Rendering Done");
  // })

  // variation 2 => First Render
  // useEffect(()=>{
  //   console.log("UI render done")
  // },[])

  //variation 4 => First + whenever dependecies changes
  // useEffect(()=>{
  //   console.log("Change Observed")
  // },[name]);

  //Variation 4 => To handle unmounting component
  useEffect(()=>{
    //AEL
    console.log("listener Added");

    return()=>{
      console.log("listener removed");
    }
  },[text]);
    
  return ( 
    <div className="App"> 
      <input type="text" onChange={changeHandler}></input> 
    </div> ); 
}

export default App;
