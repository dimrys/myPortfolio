
import './App.css';
import Header from "./Header/Heaser";
import Main from "./Main/Main";
import Skills from "./Skils/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
