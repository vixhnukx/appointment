
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Doctor from './components/Doctor';
import Filter from './components/Filter';
import About from './components/About';
import Login from './pages/Login';
import Booked from './pages/Booked';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      
      
      <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/view-doctor/:id' element={<Filter/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/schedule' element={<Booked/>}/>
      
      </Routes> 

      </Router>
     
    </div>
  );
}

export default App;
