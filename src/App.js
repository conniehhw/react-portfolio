// import logo from "./logo.svg";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

// {/* <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Welcome
// </a> */}

export default App;
