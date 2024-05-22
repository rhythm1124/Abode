import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login_page';
import { auth } from '../firebase';
import {app} from '../firebase'
// import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPopup, RecaptchaVerifier , GoogleAuthProvider, signInWithPhoneNumber  } from "firebase/auth";
import backgroundImage from './bg image3.jpg';

const provider = new GoogleAuthProvider();

const PhoneSignup=()=>{
    const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();

    
    //   const onSignInSubmit = () => {
    //     console.log("Success");
    //   }

    // const googleLogIn = (e) => {
    //     e.preventDefault();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             // The signed-in user info.
    //             navigate('/welcomepg')
    //             const user = result.user;
    //             console.log(user)
    //             console.log("Success")
    //             // IdP data available using getAdditionalUserInfo(result)
    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         });
    // }

    const handleUsernameChange = (e) => {
        setUserName(e.target.value);
    };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }

    const handleSignUpClick = () => {
        navigate('/signup');
      };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setTimeout(() => {
    //         navigate('/signup');
    //     },1000);
    // };

    const goBack = () => {
        navigate('/login')
    }

    const sendSMS = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'normal',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            //   onSignInSubmit();
            console.log("captcha");
            signInWithPhoneNumber();
            },
            'expired-callback' : () => {
                console.log("failed")
            }
          });
    
          console.log(username);
          const appVerifier = window.recaptchaVerifier.render().then((widgetID) => {
            window.recaptchaWidgetId = widgetID;
          });


          signInWithPhoneNumber(auth, username, appVerifier)
          .then((confirmationResult) => {
      
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            console.log("success")
            window.confirmationResult = confirmationResult;
            // ...
          }).catch((error) => {
              console.log("error")
              console.log(error)
            // Error; SMS not sent
            // ...
          });
    }

    
    return(
        <div className='outer1'>
        <div className='login'>
            <h1>Login</h1>
            {/* {console.log("Buidling")} */}
            <div className='abc'>
            <button className="btn" onClick={goBack}>
                <h3>Go Back</h3></button>
            <hr className='line'></hr>
            </div>
            <form>
                <div className='input-box'>
            <div id='sign-in-button' className='input-box'>
                </div>
                    <input type='text' placeholder='Phone Number*' onChange={handleUsernameChange} required/>
                </div>
                <br/><br/>
                    <center><button className='submit' onClick={sendSMS}>Login</button></center>
                <div className='register-link'>
                    <p>Don't have an account?  <a href='#'onClick={handleSignUpClick}>SignUp</a></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default PhoneSignup;