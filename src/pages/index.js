import React from "react"
import "../stylesheets/styles.css"
//import Button from "../components/buttons"
//import { Link } from "gatsby"

const {useState} = React

export default () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
        
        <h1> I am centered </h1>
        
        <p>
          {counter}
        </p>

        <button class="sexy-button" onClick={() => {
            setCounter(counter + 1)
        }}>Click me!</button>
      </div>

      <div class="footer">this is my BANGER footer</div>
    </div>
  );
}