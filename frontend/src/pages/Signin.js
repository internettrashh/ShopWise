import React, { useEffect, useState } from 'react';
import ShoppingBag from '../public/shopping-bagamico-1.svg'; 
import mydesign from '../public/mdieye.svg';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './config'; // adjust the path as needed
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/Main');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signUpWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate('/Main'); // navigate to main page after successful signup
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Emails do not match");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };
  

 
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@400&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Garamond:wght@400;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inder:wght@400&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', position: 'relative', backgroundColor: '#fff', overflow: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '3.69rem 1.88rem 4.13rem', boxSizing: 'border-box', rowGap: '20px', letterSpacing: 'normal'}}>
      <div style={{height: '62rem', width: '61.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0.5rem 0rem 0rem', boxSizing: 'border-box', minWidth: '61.5rem', maxWidth: '100%'}}>
        <img style={{alignSelf: 'stretch', flex: 1, position: 'relative', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%'}} loading="eager" alt="" src={ShoppingBag} />
      </div>
      {/* <img style={{height: '5rem', width: '4rem', position: 'absolute', margin: '0 !important', right: '24.88rem', bottom: '11.31rem', objectFit: 'cover', zIndex: 1}} loading="eager" alt="" src={require("../public/google-icon@2x.png") }/> */}
      <form onSubmit={(e) => {
    if (validateForm(e)) {
      signUpWithEmail(email, password);
    }
  }} style={{margin: 0, width: '36.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '2.75rem', minWidth: '36.5rem', maxWidth: '100%'}}>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0rem 0rem 0.38rem 0rem'}}>
          <h1 style={{margin: 0, position: 'relative', fontSize: '3rem', letterSpacing: '-0.34px', fontWeight: 400, fontFamily: 'Garamond', background: 'linear-gradient(91.51deg, #ffd850, #eb1267)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', zIndex: 1}}>
            Welcome back!
          </h1>
        </div>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0rem 0rem 0.63rem', boxSizing: 'border-box', gap: '1.44rem', maxWidth: '100%'}}>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0rem 0rem 0.25rem', gap: '0.63rem'}}>
            <div style={{position: 'relative', fontSize: '1.38rem', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#323232', textAlign: 'center'}}>
              Email
            </div>
            <input onChange={(e) => setEmail(e.target.value)} required  style={{width: '100%', border: 'none', outline: 'none', backgroundColor: '#f7f7f7', alignSelf: 'stretch', height: '4.25rem', borderRadius: '15px', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '1.38rem 0.63rem', boxSizing: 'border-box', fontFamily: 'Urbanist', fontSize: '1.25rem', color: '#767676', minWidth: '15.63rem'}} placeholder="Email" type="text" />
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '0.25rem'}}>
            <div style={{position: 'relative', fontSize: '1.38rem', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#323232', textAlign: 'center'}}>
              Confirm Email
            </div>
            <input onChange={(e) => setConfirmEmail(e.target.value)} required style={{width: '100%', border: 'none', outline: 'none', backgroundColor: '#f7f7f7', alignSelf: 'stretch', height: '4.25rem', borderRadius: '15px', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '1.38rem 0.63rem', boxSizing: 'border-box', fontFamily: 'Urbanist', fontSize: '1.25rem', color: '#767676', minWidth: '15.63rem'}} placeholder="Confirm Email" type="text" />
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%'}}>
            <div style={{position: 'relative', fontSize: '1.38rem', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#323232', textAlign: 'center'}}>
              Password
            </div>
            <div style={{alignSelf: 'stretch', height: '4.88rem', filter: 'drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%', marginTop: '-0.31rem'}}>
              <div style={{alignSelf: 'stretch', height: '5.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0.63rem 0rem', boxSizing: 'border-box', maxWidth: '100%'}}>
                <div style={{alignSelf: 'stretch', flex: 1, borderRadius: '15px', backgroundColor: '#f7f7f7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #e1e1e3', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '1rem 0.69rem 1rem 0.56rem', gap: '0.63rem', maxWidth: '100%'}}>
                  <input onChange={(e) => setPassword(e.target.value)} required style={{width: 'calc(100% - 43px)', border: 'none', outline: 'none', fontFamily: 'Urbanist', fontSize: '1.25rem', backgroundColor: 'transparent', height: '1.5rem', flex: 1, position: 'relative', letterSpacing: '-0.34px', color: '#767676', textAlign: 'left', display: 'flex', alignItems: 'center', minWidth: '9.38rem', maxWidth: 'calc(100% - 33px)'}} placeholder="Enter your Password" type="password" />
                  <img style={{height: '1.31rem', width: '1.44rem', position: 'relative', overflow: 'hidden', flexShrink: 0}} alt="" src={mydesign} />
                </div>
              </div>
            </div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%'}}>
            <div style={{position: 'relative', fontSize: '1.38rem', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#323232', textAlign: 'center'}}>
              Confirm Password
            </div>
            <div style={{alignSelf: 'stretch', height: '4.88rem', filter: 'drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%'}}>
              <div style={{alignSelf: 'stretch', height: '5.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0.63rem 0rem', boxSizing: 'border-box', maxWidth: '100%'}}>
                <div style={{alignSelf: 'stretch', flex: 1, borderRadius: '15px', backgroundColor: '#f7f7f7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #e1e1e3', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '1rem 0.69rem 1rem 0.56rem', gap: '0.63rem', maxWidth: '100%'}}>
                  <input onChange={(e) => setConfirmPassword(e.target.value)} required style={{width: 'calc(100% - 43px)', border: 'none', outline: 'none', fontFamily: 'Urbanist', fontSize: '1.25rem', backgroundColor: 'transparent', height: '1.5rem', flex: 1, position: 'relative', letterSpacing: '-0.34px', color: '#767676', textAlign: 'left', display: 'flex', alignItems: 'center', minWidth: '9.38rem', maxWidth: 'calc(100% - 33px)'}} placeholder="Confirm Password" type="password" />
                  <img style={{height: '1.31rem', width: '1.44rem', position: 'relative', overflow: 'hidden', flexShrink: 0}} alt="" src={mydesign} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button  style={{cursor: 'pointer', border: 'none', padding: 0, backgroundColor: 'transparent', alignSelf: 'stretch', height: '4.25rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '100%'}}>
          <div style={{alignSelf: 'stretch', width: '35.81rem', borderRadius: '15px', background: 'linear-gradient(90.81deg, #ffd850, #eb1267)', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.94rem 2.19rem', boxSizing: 'border-box', maxWidth: '100%'}}>
            <b style={{alignSelf: 'stretch', width: '10.75rem', position: 'relative', fontSize: '2rem', display: 'none', fontFamily: 'Urbanist', color: '#fff', textAlign: 'left', whiteSpace: 'nowrap'}}>Get Started
            </b>
          </div>
          <b style={{position: 'relative', fontSize: '2.5rem', display: 'inline-block', fontFamily: 'Urbanist', color: '#fff', textAlign: 'left', whiteSpace: 'nowrap', zIndex: 1, marginLeft: '-21.37rem'}}>Sign in</b>
        </button>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '0.13rem'}}>
          <div style={{height: '0.38rem', width: '12.75rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0rem 0.69rem 0rem 0rem', boxSizing: 'border-box'}}>
          <img style={{alignSelf: 'stretch', height: '0.12rem', position: 'relative', maxWidth: '100%', overflow: 'hidden', flexShrink: 0, objectFit: 'contain'}} loading="eager" alt="" />
          </div>
          <div style={{height: '2rem', width: '8.38rem', position: 'relative', fontSize: '1.25rem', fontWeight: 600, fontFamily: 'Urbanist', color: '#323232', textAlign: 'left', display: 'inline-block', flexShrink: 0}}>
            or sign in with
          </div>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0rem 0rem 0.44rem', boxSizing: 'border-box', minWidth: '9.81rem'}}>
            <img style={{alignSelf: 'stretch', height: '0.12rem', position: 'relative', maxWidth: '100%', overflow: 'hidden', flexShrink: 0, objectFit: 'contain'}} loading="eager" alt="" />
          </div>
        </div>
      <div onClick={signInWithGoogle} style={{alignSelf: 'stretch', height: '4.25rem', position: 'relative', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <img style={{height: '3rem', width: '3rem'}} loading="eager" alt="" src={require("../public/google-icon@2x.png")} />
</div>
      </form>
    </div>
  </div>
  )
}

export default Signin
