import Axios from "axios";
import { useState } from 'react';
import './cn.css'


export default function ChuckNoris() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((response)=>{
        console.log(response)
      setJoke(response.data.value)
    });
  };

  return ( 
   
    <div>
      <p>ChuckNoris Jokes</p>
    <button onClick={getJoke}>Get a Joke</button>
    <p className={'joke'}>
    {joke}
    </p>
    </div>
    )
  
}
