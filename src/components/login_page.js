import {React, useState} from 'react';
import './login_page.css';
import backgroundImage from './bg image3.jpg';
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


const provider = new GoogleAuthProvider();

const Login_page=()=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const googleLogIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                navigate('/Main')
                const user = result.user;
                console.log(user)
                console.log("Success")
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleUsernameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUpClick = () => {
        navigate('/signup');
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/signup');
        },1000);
        
    };
    const phoneClick = () => {
        navigate('/PhoneSignup');
    }
    const onLogin = (e) => {
        console.log("Signing in: " + username + ", " + password);
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/Main')
            console.log(user);
            console.log("success")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return(
        <div className='outer1'>
        <div className='login'>
        <h1>Login</h1>
        <div className='abc'>
        <button className="btn" onClick={googleLogIn}>
            <h3>Continue With Google</h3></button>
        <button  className='btn1' onClick={phoneClick}>
            <h3>Continue With PhoneNo.</h3>
        </button>
        <hr className='line'></hr>
        </div>
        <form>
            <div className='input-box'>
                <input type='text' placeholder='Username*' onClick={handleUsernameChange}required/>
            </div>
            <div className='input-box1'>
                <input type='password' placeholder='Password*' onChange={handlePasswordChange} required/>
            </div>
                <center><button className='submit' onClick={onLogin}>Login</button></center>
            <div className='register-link'>
                <p>Don't have an account?<a href='#' onClick={handleSignUpClick}>SignUp</a></p>
            </div>
        </form>
    </div>
    </div>
    );
};

export default Login_page;
