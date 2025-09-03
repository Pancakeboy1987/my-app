import image from "./Max_logo_2025.png"

import './App.css';
import User from './components/user'

function App() {
  return (
    <div className="App">

      <div className="upper-block">
        janwcjn
      </div>

      <div className="main-block">
        <div className="left-block">

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
