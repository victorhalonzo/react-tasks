import { useState, useEffect, useRef } from 'react';

const useAge = () => {
  const [lastUpdate, setLastUpdate] = useState("Just now");
  var minutes=0;

  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  

  const startTimer = () => {

    timerId.current = setTimeout(() => {
        renders.current++;
        setLastUpdate("A few seconds ago")
      }, 5000)

    timerId.current = setInterval(() => {
      renders.current++;
      minutes=minutes+1
      setLastUpdate(minutes + " minute(s) ago")
    }, 60000)
    //inputRef.current.focus();
  }

 

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    //inputRef.current.focus();
  }

  const useStart_over = () => {
    setLastUpdate("Just now")
    stopTimer();
    startTimer();
  }

  useEffect(() => {
    stopTimer();
    startTimer();
  }, []);

  return {
    lastUpdate,
    startTimer,
    stopTimer,
    useStart_over,
  };
};

export { useAge };


