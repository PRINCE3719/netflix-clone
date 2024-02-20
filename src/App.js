
import './App.css';
import {Route} from "react-router-dom";
import Home from './components/Home/Home';
import { Routes } from 'react-router-dom';
import Details from './components/Details/Details';
import Movieplay from './components/Movieplay/Movieplay';

function App() {
  return (
   <div className='App'>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path = "/details" Component={Details}/>
    <Route exact path='/videoPlay' Component={Movieplay}/>
    </Routes>
   
   </div>
  );
}

export default App;
