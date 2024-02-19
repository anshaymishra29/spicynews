// import logo from './logo.svg';
import './App.css';
import News from './News';
import CheckCompatibility from './CheckCompatibility';
import Error from './Error';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Astrology from './Astrology';
import ImageGenerator from './ImageGenerator';

function App() {
  return(<>
  <Navigation/>
  <Routes>
    <Route exact path='/' Component={News}/>
    <Route exact path='/checkcompatibility' Component={CheckCompatibility}/>
    <Route exact path='/checkcompatibility/error' Component={Error}/>
    {/* <Route path='/contact/:myNum' Component={Contact} /> */}
    <Route exact path='/astrology' Component={Astrology}/>
    <Route path='/imagegenerator' Component={ImageGenerator} />
    <Route  path='*' Component={Error}/>
    
  </Routes>
  </>)
}

export default App;
