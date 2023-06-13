
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navbar /> } >
            <Route path='home' element={ <Home /> } />
            <Route path='contact' element={ <Contact /> } />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
