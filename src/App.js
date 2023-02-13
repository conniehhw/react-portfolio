import logo from './logo.svg';
import './App.css';
import ProjectsComponent from './Projects';
// second option: import { ProjectsComponent, Header } from './Projects';
import Footer from './Footer';



//convention to use a CAPITAL to denote 
function App() { //A functional Component (React) --> returning JSX (using html syntax) //every function we create IS a component
                //can also include other functions as needed here such as js expressions

  const name = 'Connie Wong'; // how to leverage jSccript expressions? how to leverage 'name' into JSX return below?
                              // for example line 20 where tx is Connie- to render JS into JSX, syntax notation is { }
                              // see Math js example lie 23
  const hasCat = true;        // using js tiernary operators                     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World, this is my portfolio. My name is {name} Connie. 
        </p>
        <p>I am {hasCat ? Math.floor(Math.random() * 100 + 50) :99} years old</p>
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
