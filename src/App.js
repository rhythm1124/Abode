import './App.css';
<<<<<<< Updated upstream
import LoginPage from './components/login_page'
=======
import login_page from './components/login_page.js';
import Main from './components/main.js';
import Navbar from './components/navbar.js';
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <login_page/>
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