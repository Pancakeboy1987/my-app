import image from "./Max_logo_2025.png"
import { useState } from 'react';

import './App.css';
import User from './components/user'

function App() {
  return (
    <div className="App">

      <div className="upper-block">
        kuritsagram
      </div>

      <div className="main-block">
        <div className="left-block">
          <div className="search-box">
            <input className="search"/>
          </div>
          <div className="user-block">
            <User
            img={image}
            name="Kyouma"
            lastmessage="хуй"
            time="22:00"/>
            <User
            img={image}
            name="Kyouma"
            lastmessage="хуй"
            time="22:00"/>
            <User
            img={image}
            name="Kyouma"
            lastmessage="хуй"
            time="22:00"/>
            <User
            img={image}
            name="Kyouma"
            lastmessage="хуй"
            time="22:00"/>
            <User
            img={image}
            name="Kyouma"
            lastmessage="хуй"
            time="22:00"/>

          
          
          </div>

        </div>


        <div className="right-block">

          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          
          </a>
        </div>
      </div>




    </div>
  );
}

export default App;
