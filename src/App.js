import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact Us/Contact';


function App() {
  return (
    <div classname="Wrapper">
      <h1>Marine Mammals</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>


</Routes>
    
    </BrowserRouter>
    </div>

    
  );
}

export default App;
