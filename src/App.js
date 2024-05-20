import './App.css';
// import LoginPage from './components/login_page';
// import SignupPage from './components/signup_page';
// import WelcomePage from './components/welcomepage';
import Main from './components/main.js';
import Navbar from './components/navbar.js';
// import Collection from './components/Collection.js';
// import CartDropdown from './components/CartDropdown.js';
function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      {/* <WelcomePage/> */}
      <Navbar />
      {/* <CartDropdown/> */}
      <Main/>
      {/* <Collection/> */}
      {/* <SignupPage/> */}
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