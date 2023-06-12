
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navbar /> } >
            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
