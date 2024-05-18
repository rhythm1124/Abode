import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
// import login_page from './components/login_page'
import Main from './components/main.js';

function App() {
  return (
    // <div>
    //   <login_page/>
    // </div>
    <div> 
      <Main/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
