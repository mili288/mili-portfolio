import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Error from './components/Error'
import Footer from './components/Footer'
import IphoneDesc from './components/IphoneDesc'
import WeatherDesc from './components/WeatherDesc'
import RecipeDesc from './components/RecipeDecs'
import Valorant from './components/Valorant';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/work/4" element={<Valorant/>}/> 
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/work/1" element={<IphoneDesc/>} />
          <Route path="/work/2" element={<WeatherDesc/>} />
          <Route path="/work/3" element={<RecipeDesc/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
