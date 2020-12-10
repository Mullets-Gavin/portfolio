import React from "react"
import "../stylesheets/index.css"
import "../stylesheets/styles.css"
//import Button from "../components/buttons"
//import { Link } from "gatsby"

const {useState} = React

export default () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="Counter">
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
        
        <h1>I am centered</h1>

        <p>
          {counter}
        </p>

        <button class="sexy-button" onClick={() => {
            setCounter(counter + 1)
        }}>Click me!</button>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div style={{ color: `purple` }}>
//       <Link to="/contact/">Contact</Link>
//       <h1>Hello Gatsby!</h1>
//       <p>What a world.</p>
//       <img src="https://source.unsplash.com/random/400x200" alt="" />
//     </div>
//   )
// }