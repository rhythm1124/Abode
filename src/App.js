import './App.css';
// import LoginPage from './components/login_page';
import SignUp from './components/signup_page';
// import WelcomePage from './components/welcomepage';
// import Main from './components/main.js';
// import ContactUs from './components/ContactUs.js';
// import Collection from './components/Collection.js';
// import CartDropdown from './components/CartDropdown.js';

function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      <SignUp/>
      {/* <WelcomePage/> */}
      {/* <CartDropdown/> */}
      {/* <Main/> */}
      {/* <Collection/> */}
      {/* <ContactUs/> */}
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