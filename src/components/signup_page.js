import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './signup_page.css';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Login_page from './login_page';


const SignUp=()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const signUp = (e) => {
        console.log("Creating user with: " + email + ", " + password);
        e.preventDefault()
       
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("Updating name to: " + firstName + lastName);
              updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName
              })
              console.log(user);
              console.log("Success");
               navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
      }
      const login = () => {
        const navigate = useNavigate();
        const navigateToLogin = () => {
            navigate('/login_page'); // Ensure the path matches the Route path
          };
        }
    return(
        <div className='outer2'>
        <div className='signup'>
            <h1>SignUp</h1>
            <form>

                <div className='input-boxa'>
                    <input type='text' placeholder='First Name*' onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div className="input-box0">
                <input type='text' placeholder='Last Name*' onChange={(e) => setLastName(e.target.value)} required/>
                <input type='email' placeholder='Email Id*' onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className='input-boxb'>
                    <input type='password' placeholder='Password*' onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                    <center><button className='submit1'onClick={navigateToLogin()}>SignUp</button></center>
                    
            </form>
        </div>
        </div>
    );
};

export default SignUp;