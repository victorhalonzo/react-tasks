import React from "react";
import { useAge } from "./hooks";
import { useState, useEffect } from "react";
import "./styles.css" 

function App() {
  /* make whichever changes you deem necessary in this function */
  const [input, setInput] = useState("Just now");
  // you will probably want to call the hook here: const ...  = useAge();

  const {lastUpdate,startTimer, useStart_over,stopTimer} = useAge();

  // you will want to replace the following line
  const theTimeThatPassed = lastUpdate;

  /*useEffect(() => {
    startTimer();
  }, []);*/

  return (
    <div className="App" onLoad={startTimer}>
      <p className="text">Last Updated: {theTimeThatPassed}</p>
      {/* You will need to add a button here */}
      <button className="btn" onClick={useStart_over}>Start over</button>
      
    </div>
  );
}

export default App;
