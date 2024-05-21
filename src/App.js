import './App.css';
import LoginPage from './components/login_page';
// import SignupPage from './components/signup_page';
import WelcomePage from './components/welcomepage';
import Main from './components/main.js';
import Navbar from './components/navbar.js';
import ContactUs from './components/ContactUs.js';
// import Collection from './components/Collection.js';
// import CartDropdown from './components/CartDropdown.js';
import PhoneSignup from './components/phone_signup.js';

function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      {/* <SignUp/> */}
      <WelcomePage/>
      {/* <CartDropdown/> */}
      {/* <Main/> */}
      {/* <Collection/> */}
      {/* <ContactUs/> */}
      {/* <PhoneSignup/> */}
    </div>
  );
}
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WelcomePage/>} />
//         <Route path="/login" element={<LoginPage/>}/>
//         <Route path="/SignUp" element={<SignUp/>}/>
//         <Route path="/PhoneSignup" element={<PhoneSignup/>}/>
//         <Route path="/Main" element={<Main/>}/>
//         <Route path="/Collection" element={<Collection/>}/>
//         <Route path="/Cart" element={<CartDropdown/>}/>
//         <Route path="/ContactUs" element={<ContactUs/>}/>
//       </Routes>
//     </Router>
//   );
// };  

export default App;