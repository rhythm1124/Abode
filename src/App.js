import './App.css';
import LoginPage from './components/login_page';
import SignupPage from './components/signup_page';
function App() {
  return (
    <div>
      <LoginPage/>
      <SignupPage/>
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