import './App.css';
import LoginPage from './components/login_page.js';
import Main from './components/main.js';
import Navbar from './components/navbar.js';
import Collection from './components/Collection.js';

function App() {
  return (
    <div>
      <Navbar />
      <Main/>
      <Collection/>
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