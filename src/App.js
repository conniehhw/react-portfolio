import logo from './logo.svg';
import './App.css';
import ProjectsComponent from './Projects';
// second option: import { ProjectsComponent, Header } from './Projects';
import Footer from './Footer';


//convention to use a CAPITAL to denote 
function App() { //A functional Component (React) --> returning JSX (using html syntax) //every function we create IS a component
  //can also include other functions as needed here
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World, this is my portfolio. My name is Connie.
        </p>
        <p id='some-tx-tag'>Some Text Here demo CSS
        </p>
        <ProjectsComponent />
        <ProjectsComponent />
        <ProjectsComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome
        </a>
      </header>
      <Footer />
    </div>
  );
}
//lines 8 - 25 is a top level div/p/section/a, it cannot use siblings, can only have 1 parent element
//line 18 - ProjectsComponent is injected - from Projects.js
//line 18 - 20 components are re-usable, bit-size, logic

export default App;
