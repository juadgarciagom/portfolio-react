import './App.css';
import { NavBar } from '../containers/NavBar';
import { Hero } from '../containers/Hero';
import { Projects } from '../containers/Projects';
import { About } from '../containers/About';
import { Contact } from '../containers/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
