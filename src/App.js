import './App.css';
import login_page from './components/login_page'
import Navbar from './components/navbar.js';
import Main from './components/main.js';

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