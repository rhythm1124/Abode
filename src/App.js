import './App.css';
import LoginPage from './components/login_page';
import PhoneSignup from './components/phone_signup';
import SignupPage from './components/signup_page';
import WelcomePage from './components/welcomepage';
function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      {/* <WelcomePage/> */}
      <PhoneSignup/>
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