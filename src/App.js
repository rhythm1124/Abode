import './App.css';
import React from 'react';
import LoginPage from './components/login_page';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
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