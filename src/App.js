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
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<WelcomePage/>} /> */}
//         <Route path="/login" element={<login_page/>}/>
//       </Routes>
//     </Router>
//   );
// };  

export default App;