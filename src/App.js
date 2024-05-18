import './App.css';
import login_page from './components/login_page'
import Main from './components/main.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div>
      <Navbar/>
      <login_page/>
      <Main/>
    </div>
  );
}

export default App;