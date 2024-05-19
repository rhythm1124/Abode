import './App.css';
import LoginPage from './components/login_page.js';
import Main from './components/Landing-page.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <Main/>
      <LoginPage/>
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