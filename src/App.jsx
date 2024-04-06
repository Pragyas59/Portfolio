import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Container/home';
import Contact from './Container/conatct';
import Portfolio from './Container/portfolio';
import About from './Container/about';
import Resume from './Container/resume';
import Skills from './Container/skills';
import Navbar from './Components/Navbar';





function App() {
  return (
    <div className="App">

    
    <BrowserRouter>
   
    <Navbar/>
    
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>

      

    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;