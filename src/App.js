
import './App.css';
import {Route} from "react-router-dom";
import Home from './components/Home/Home';
import { Routes } from 'react-router-dom';
import Details from './components/Details/Details';

function App() {
  return (
   <div className='App'>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path = "/details" Component={Details}/>
    </Routes>
   
   </div>
  );
}

export default App;
