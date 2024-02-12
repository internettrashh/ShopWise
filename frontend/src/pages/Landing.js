import React from 'react'
import pinkDownGrade from '../public/pink-down-grad.svg';
import purpleUpGrade from '../public/purple-up-grad.svg';
import { useNavigate } from 'react-router-dom';




function Landing() {

    const navigate = useNavigate();

    const navSignin = () => {
    navigate('/signin');
}

  return (
    <div >
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@400&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Garamond:wght@400;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inder:wght@400&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{position: 'relative',  backgroundColor: '#fff', width: '100%', overflow: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0rem 3.38rem', boxSizing: 'border-box', letterSpacing: 'normal', textAlign: 'left', fontSize: '4rem', color: '#fff', fontFamily: 'Garamond'}}>
      <main style={{height: '133.69rem', width: '162.88rem', position: 'absolute', margin: '0 !important', right: '-34.81rem', bottom: '-32.44rem'}}>
        <div style={{position: 'absolute', top: '47.04rem', left: '104.14rem', borderRadius: '50%', backgroundColor: '#6a2065', filter: 'blur(400px)', width: '60.55rem', height: '66.99rem', transform: 'rotate(14.09deg)', transformOrigin: '0 0', zIndex: 1}} />
        <section style={{position: 'absolute', top: '0rem', left: '0rem', borderRadius: '50%', backgroundColor: '#ff1067', filter: 'blur(420px)', width: '101.56rem', height: '75rem', zIndex: 2}} />
        <div style={{position: 'absolute', top: '66.63rem', left: '0rem', borderRadius: '50%', backgroundColor: '#ffd74b', filter: 'blur(450px)', width: '62.56rem', height: '67.06rem', zIndex: 3}} />
      </main>
      <div style={{height: '69.81rem', width: '101.06rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '1.31rem 0.56rem', boxSizing: 'border-box', position: 'relative', maxWidth: '100%'}}>
        <img style={{height: '100%', width: '91.74rem', position: 'absolute', margin: '0 !important', top: '0rem', right: '0.59rem', bottom: '0rem', maxHeight: '100%', objectFit: 'contain'}} alt="" src={pinkDownGrade }/>
        <header style={{width: '79.63rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', maxWidth: '100%', zIndex: 4, textAlign: 'left', fontSize: '2.81rem', color: '#fff', fontFamily: 'Inika'}}>
          <div style={{width: '7.69rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: '0.63rem 0rem 0.63rem 0.63rem', boxSizing: 'border-box'}}>
            <h2 style={{margin: 0,left:'50px', height: '3.69rem', flex: 1, position: 'relative', fontSize: 'inherit', fontWeight: 400, fontFamily: 'inherit', display: 'inline-block', whiteSpace: 'nowrap'}}>
             ShopWise
            </h2>
          </div>
          <div style={{width: '34.38rem', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1.25rem 0rem', boxSizing: 'border-box', maxWidth: '100%', fontSize: '1.5rem', fontFamily: 'Inter'}}>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0rem 0.13rem 0rem 0rem', boxSizing: 'border-box', gap: '0.625rem', maxWidth: '100%'}}>
    <div style={{height: '2.38rem', width: '6.83rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
      Home
    </div>
    <div style={{height: '2.38rem', width: '7.03rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
      About
    </div>
    <div style={{height: '2.38rem', width: '9.23rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
      Contact
    </div>
  </div>
</div>
        </header>
      </div>
      <div style={{width: '46.94rem', margin: '0 !important', position: 'absolute', top: '14.88rem', left: '4rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '1.25rem 0rem', boxSizing: 'border-box', maxWidth: '100%'}}>
        <div style={{width: '61.31rem', margin: '0 !important', position: 'absolute', right: '-53.5rem', bottom: '-35.25rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', zIndex: 4}}>
          <div style={{height: '1.88rem', width: '1.88rem', position: 'absolute', margin: '0 !important', top: 'calc(50% - 3.04px)', left: '0rem', borderRadius: '50%', background: 'linear-gradient(81.87deg, #ff9c83, #ff0074)', boxShadow: '0px 50px 100px 30px rgba(0, 0, 0, 0.25)', transform: 'rotate(-36.77deg)', transformOrigin: '0 0'}} />
          <div style={{width: '58.69rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.63rem', boxSizing: 'border-box', maxWidth: '100%'}}>
            <div style={{height: '58.63rem', flex: 1, position: 'relative', maxWidth: '100%'}}>
              <div style={{position: 'absolute', top: '0rem', left: '0rem', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', left: '0rem', top: '1.25rem', transform: 'scale(1.065)'}} loading="eager" alt="" src={require("../public/image-21@2x.png") }/>
              </div>
              <div style={{position: 'absolute', top: '36.62rem', left: '9.94rem', borderRadius: '50%', background: 'linear-gradient(81.87deg, #ff9c83, #ff0074)', boxShadow: '0px 50px 100px 30px rgba(0, 0, 0, 0.25)', width: '6.29rem', height: '4.99rem', transform: 'rotate(-21.55deg)', transformOrigin: '0 0', zIndex: 1}} />
              <div style={{position: 'absolute', top: '12.06rem', left: '3.94rem', borderRadius: '50%', background: 'linear-gradient(81.87deg, #ee896f, #df267a)', boxShadow: '0px 50px 100px 30px rgba(0, 0, 0, 0.25)', width: '1.88rem', height: '1.88rem', transform: 'rotate(-36.77deg)', transformOrigin: '0 0', zIndex: 1}} />
            </div>
          </div>
        </div>
        <h1 style={{margin: 0, height: '13.5rem', flex: 1, position: 'relative', fontSize: 'inherit', fontWeight: 700, fontFamily: 'inherit', display: 'inline-block', maxWidth: '100%', zIndex: 3}}>
          <p style={{margin: 0}}>Unveiling Endless Possibilities,</p>
          <p style={{margin: 0}}>One Click at a Time</p>
        </h1>
      </div>
      <button onClick={navSignin} style={{cursor: 'pointer', border: 'none', padding: '0.94rem', backgroundColor: 'transparent', width: '15.13rem', margin: '0 !important', position: 'absolute', bottom: '20rem', left: '4rem', borderRadius: '30px', background: 'linear-gradient(90deg, #db0e58, #b128a8)', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', whiteSpace: 'nowrap', zIndex: 4}}>
        <b style={{height: '2.38rem', position: 'relative', fontSize: '2rem', display: 'inline-block', fontFamily: 'Urbanist', color: '#fff', textAlign: 'left'}}>Get Started
        </b>
      </button>
      <div style={{height: '57rem', width: '100.63rem', margin: '0 !important', position: 'absolute', top: '0rem', right: '-35.12rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '1.88rem 41.38rem', boxSizing: 'border-box'}}>
        <img style={{height: '100%', width: '100%', position: 'absolute', margin: '0 !important', top: '0rem', right: '0rem', bottom: '0rem', left: '0rem', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'contain', zIndex: 3}} alt="" src={purpleUpGrade}/>
        <button onClick={navSignin} style={{cursor: 'pointer', border: '2px solid #fff', padding: '0.5rem 0.38rem 0.5rem 0.88rem', backgroundColor: '#6c2367', width: '8.94rem', borderRadius: '10px', boxSizing: 'border-box', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', whiteSpace: 'nowrap', zIndex: 4}}>
          <div style={{height: '2.81rem', flex: 1, position: 'relative', fontSize: '2.25rem', fontFamily: 'Inder', color: '#fff', textAlign: 'left', display: 'inline-block'}}>
            Sign in
          </div>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Landing
