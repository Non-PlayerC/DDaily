import './App.css';

import { Parallax, ParallaxLayer } from "@react-spring/parallax"

function App() {
  return (
    <div>
      <Parallax pages={3} style={{ backgroundImage: "linear-gradient(#e66465,#9198e5)" }}>
        <ParallaxLayer offset={0} className="center" style={{ backgroundColor: "#FFCDD2" }}>
          <div>Page 1</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="center" style={{ backgroundColor: "#EF9A9A" }}>
          <div>Page 2</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="center" style={{ backgroundColor: "#E57373" }}>
          <div>Page 3</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
