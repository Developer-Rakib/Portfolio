import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="menu" class="fas fa-bars"></div>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <a href="#home" class="top">
        ||
      </a>
    </div>
  );
}

export default App;
