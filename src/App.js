import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import MySkills from './Components/MySkills/MySkills';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="menu" class="fas fa-bars"></div>
      <Home></Home>
      <About></About>
      {/* <Education></Education> */}
      <MySkills></MySkills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <a style={{color:'var(--primary)', fontSize:'40px'}} href="#home" class="top">
        <BsFillArrowUpSquareFill></BsFillArrowUpSquareFill>
      </a>
    </div>
  );
}

export default App;
