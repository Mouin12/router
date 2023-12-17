import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './componets/Contact';
import About from './componets/About';
import Home from './componets/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Routes>
       <Route path="/home/:id" element={<Home / >}></Route>
       <Route path='/about' element={<About/ >}></Route>
       <Route path="/conta/:id" element={<Contact/ >}></Route>

       
       
       
       </Routes>
      </header>
    </div>
  );
}

export default App;
