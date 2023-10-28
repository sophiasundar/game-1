
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react";



export default function App() {

  const [value, setValue] = useState(0);
  
  return (
    <div className="App">
      <h4>{`counter value: ${value}`}</h4>
     
     <Counter></Counter>
     <button onClick = { ()=>setValue(value+1)
  }
    
    >Counter</button>
     

    </div>
  );
}




const Counter = () => {

  
   

  }