import './App.css';
import ReactDom from "react-dom/client"
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("red")
  const [year, setYear] = useState("2021")

  return (
    <>
      <h1>My favorite color is {color}! {year}</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => [setColor("red"), setYear("2022")]}
      >Red</button>
      <button
        type="button"
        onClick={() => [setColor("pink"), setYear("2023")]}
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
