import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
// 引用 bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  );
}

export default App;
