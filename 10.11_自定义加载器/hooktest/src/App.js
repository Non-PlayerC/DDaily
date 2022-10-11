import './App.css';
import ReactDom from "react-dom/client"
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)
export default App;
