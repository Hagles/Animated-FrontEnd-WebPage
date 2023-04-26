import Axios from "axios";
import { useState } from 'react';
// import ChuckNoris from '../ChuckNoris/ChuckNoris';



export default function Joke() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
      setJoke(response.data.setup+ '...'+ response.data.punchline)
    });
  };

  return ( 
   
    <div>
      <p>JOke</p>
    <button onClick={getJoke}>Get a Joke</button>
    <p>
    {joke}
    </p>
    
    {/* <ChuckNoris/> */}
    </div>
    )
  
}
