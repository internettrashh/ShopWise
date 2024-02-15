import React from 'react'
import Search from '../public/search.svg';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListProduct from './ListProduct';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // If the search query is empty, show a toast notification and don't navigate
      toast.error('Please enter a search query.');
      return;
    }
    navigate('/List of Product');
    
  };

  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Garamond:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inder:wght@400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abhaya Libre:wght@400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alice:wght@400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Andika:wght@400&display=swap" />
        <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
        <footer style={{width: '100%', position: 'relative', background: 'linear-gradient(\
                  112.68deg,\
                  #ffd850,\
                  #ff6080 30%,\
                  #ff1067 66.5%,\
                  #6a2065\
                )', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '2.88rem 5.69rem 25.69rem 1.25rem', boxSizing: 'border-box', gap: '8.75rem', letterSpacing: 'normal'}}>
          <header style={{width: '90.31rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%', textAlign: 'left', fontSize: '2.81rem', color: '#fff', fontFamily: 'Inika'}}>
            <div style={{width: '79.63rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', maxWidth: '100%'}}>
              <div style={{width: '7.63rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: '0.63rem 0rem 0.63rem 0.63rem', boxSizing: 'border-box'}}>
                <h1 style={{margin: 0, height: '3.69rem', flex: 1, position: 'relative', fontSize: 'inherit', fontWeight: 400, fontFamily: 'inherit', display: 'inline-block', whiteSpace: 'nowrap'}}>
                  ShopWise
                </h1>
              </div>
              <div style={{width: '54.38rem', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1.25rem 0rem', boxSizing: 'border-box', maxWidth: '100%', fontSize: '1.5rem', fontFamily: 'Inter'}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0rem 0.13rem 0rem 0rem', boxSizing: 'border-box', gap: '1.25rem', maxWidth: '100%'}}>
                  <div style={{height: '2.38rem', width: '6.83rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
                    Home
                  </div>
                  <div style={{height: '2.38rem', width: '7.03rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
                    About
                  </div>
                  <div style={{height: '2.38rem', width: '5.12rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
                    Blog
                  </div>
                  <div style={{height: '2.38rem', width: '9.23rem', position: 'relative', fontWeight: 500, display: 'inline-block', flexShrink: 0}}>
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section style={{width: '90.31rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', maxWidth: '100%', textAlign: 'left', fontSize: '4rem', color: '#fff', fontFamily: '"Abhaya Libre"'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '3.13rem', maxWidth: '100%'}}>
              <div style={{width: '74.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '0.19rem', maxWidth: '100%'}}>
                <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0rem 0.63rem', boxSizing: 'border-box', gap: '1rem', maxWidth: '100%'}}>
                  <h1 style={{margin: 0, alignSelf: 'stretch', height: '9.5rem', position: 'relative', fontSize: 'inherit', fontWeight: 400, fontFamily: 'inherit', display: 'inline-block'}}>
                    Discover Shopwise: Where Past Prices Lead to Future Savings on
                    Your Shopping Journey
                  </h1>
                  <h2 style={{margin: 0, width: '65.5rem', height: '7.69rem', position: 'relative', fontSize: '2.25rem', fontWeight: 300, fontFamily: 'Ubuntu', display: 'inline-block', maxWidth: '100%'}}>
                    <p style={{margin: 0}}>
                      We guide you toward future savings, providing you with
                      valuable information to navigate your shopping journey
                      effectively.
                    </p>
                  </h2>
                </div>
                <div style={{alignSelf: 'stretch', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0rem 0rem 0rem 0.38rem', boxSizing: 'border-box', gap: '1.25rem', maxWidth: '100%'}}>
  <div style={{alignSelf: 'stretch', width: '74.13rem', position: 'relative', backgroundColor: '#fff', display: 'none', maxWidth: '100%'}} />
  <input style={{width: '18.63rem', border: 'none', outline: 'none', fontWeight: 300, fontFamily: 'Ubuntu', fontSize: '1.5rem', backgroundColor: 'transparent', height: '1.75rem', position: 'relative', color: '#828080', textAlign: 'left', display: 'inline-block', zIndex: 1}} placeholder="What are you looking for......" type="text" value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)} />
  <div onClick={handleSearch} style={{width: '6.75rem', backgroundColor: '#e8e8e8', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.81rem', boxSizing: 'border-box', zIndex: 1}}>
    <div style={{height: '4.13rem', width: '6.75rem', position: 'relative', backgroundColor: '#e8e8e8', display: 'none'}} />
    <img style={{height: '2.5rem', width: '2.5rem', position: 'relative', overflow: 'hidden', flexShrink: 0, zIndex: 2}} alt="" src={Search} />
  </div>
</div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '1.13rem', maxWidth: '100%', fontSize: '1.25rem', fontFamily: 'Ubuntu'}}>
                <div style={{height: '1.94rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0rem 0.94rem 0rem 0rem', boxSizing: 'border-box', fontSize: '1.5rem'}}>
                  <b style={{position: 'relative'}}>Popular</b>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '1.13rem', maxWidth: '100%'}}>
                  <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 1.25rem 0.19rem 1.13rem'}}>
                    <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                    <div style={{position: 'relative', zIndex: 1}}>Electronics</div>
                  </div>
                  <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 2.75rem 0.19rem 2.5rem'}}>
                    <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                    <div style={{position: 'relative', zIndex: 1}}>Home</div>
                  </div>
                  <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 2.31rem 0.19rem 2.06rem'}}>
                    <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                    <div style={{position: 'relative', zIndex: 1}}>Kitchen</div>
                  </div>
                  <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 2.31rem 0.19rem 2.06rem'}}>
                    <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                    <div style={{position: 'relative', zIndex: 1}}>Fashion</div>
                  </div>
                  <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 2.56rem 0.19rem 2.31rem'}}>
                    <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                    <div style={{position: 'relative', zIndex: 1}}>Health</div>
                  </div>
                  <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 2.63rem 0.19rem 2.5rem'}}>
                    <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                    <div style={{position: 'relative', zIndex: 1}}>Books</div>
                  </div>
                </div>
                <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 2.63rem 0.19rem 2.5rem'}}>
                  <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                  <div style={{position: 'relative', zIndex: 1}}>Media</div>
                </div>
                <div style={{borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 3.13rem 0.19rem 3rem'}}>
                  <div style={{height: '1.81rem', width: '8.69rem', position: 'relative', borderRadius: '10px', backgroundColor: 'rgba(152, 152, 152, 0.43)', display: 'none'}} />
                  <div style={{position: 'relative', zIndex: 1}}>Toys</div>
                </div>
              </div>
            </div>
          </section>
        </footer>
        <ListProduct searchQuery={searchQuery} />
      </div>
  )
}

export default Main
