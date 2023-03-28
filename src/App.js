import logo from './assets/img/logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/UI/NavBar";
import Skills from "./components/Pages/Skills";
import Projects from "./components/Pages/Projects";
import Footer  from "./components/Pages/Footer";
import AboutMe from './components/Pages/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;