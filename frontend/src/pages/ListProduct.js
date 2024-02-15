import React from 'react'
import line5 from '../public/line-5.svg';
import line7 from '../public/star-7.svg';
import Rectangle from '../public/rectangle-4546.svg';
import { useState, useEffect } from 'react';

function ListProduct({ searchQuery }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/search?query=${encodeURIComponent(searchQuery)}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data); // Log the fetched products
            })
            .catch(error => console.error(error));
    }, [searchQuery]);

    console.log(products);

    
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
    <div style={{width: '100%', position: 'relative',  background: 'linear-gradient(112.68deg, #ffd951, #eb1267)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0.94rem 0rem 0rem', boxSizing: 'border-box', letterSpacing: 'normal'}}>
      <header style={{width: '104.31rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0rem 1.31rem 0rem 1.25rem', boxSizing: 'border-box', gap: '1.25rem', maxWidth: '100%', textAlign: 'left', fontSize: '2.81rem', color: '#fff', fontFamily: 'Inika'}}>
        <div style={{width: '9.81rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0.63rem 2.13rem 0.63rem 0.63rem', boxSizing: 'border-box'}}>
          <h1 style={{margin: 0, height: '3.69rem', flex: 1, position: 'relative', fontSize: 'inherit', fontWeight: 400, fontFamily: 'inherit', display: 'inline-block', whiteSpace: 'nowrap'}}>
           ShopWise
          </h1>
        </div>
        <div style={{width: '69.53rem', overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1.25rem 0rem', boxSizing: 'border-box', maxWidth: '100%'}}>
          <nav style={{margin: 0, width: '54.38rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0rem 0.13rem 0rem 0rem', boxSizing: 'border-box', gap: '1.25rem', maxWidth: '100%', textAlign: 'left', fontSize: '1.5rem', color: '#fff', fontFamily: 'Inter'}}>
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
          </nav>
        </div>
      </header>
      <main style={{alignSelf: 'stretch', borderRadius: '30px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '5.31rem 3.06rem', boxSizing: 'border-box', gap: '4.31rem', maxWidth: '100%', textAlign: 'left', fontSize: '1.25rem', color: '#000', fontFamily: 'Ubuntu'}}>
        
        {products.map((product, index) => (
         <div style={{width: '50.31rem', height: '24.88rem', position: 'relative', borderRadius: '15px', backgroundColor: '#f7f7f7', maxWidth: '100%', zIndex: 1}}>
          <div style={{position: 'absolute', top: '0rem', left: '0rem', borderRadius: '15px', backgroundColor: '#f7f7f7', width: '100%', height: '100%', display: 'none'}} />
          <h1 style={{margin: 0, position: 'absolute', top: '3.13rem', left: '21.88rem', fontSize: '2rem', fontWeight: 600, fontFamily: 'Urbanist', display: 'inline-block', width: '23.36rem', height: '3.28rem', zIndex: 2}}>
            {product.title}
          </h1>
        
          <div style={{position: 'absolute', top: '11.81rem', left: '40.19rem', borderRadius: '10px', backgroundColor: 'rgba(217, 217, 217, 0.76)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 0.19rem 0.19rem 0.38rem', whiteSpace: 'nowrap', zIndex: 2}}>
           
          
          </div>
          <div style={{position: 'absolute', top: '0rem', left: '0rem', width: '100%', height: '100%'}}>
           
        
          <img 
  style={{position: 'absolute', height: '100%', top: '0rem', bottom: '0rem', left: '0rem', maxHeight: '100%', width: '20.31rem', objectFit: 'cover', zIndex: 3}} 
  alt="" 
  src={product.src} 
  onError={(e)=>{e.target.onerror = null; e.target.src="default_image_url"}}
/>
          </div>
          <div style={{position: 'absolute', top: '11.81rem', left: '20.31rem', borderRadius: '10px', backgroundColor: 'rgba(217, 217, 217, 0.76)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 0.06rem 0.19rem 0.38rem', whiteSpace: 'nowrap', zIndex: 4}}>

            
          </div>
          <div style={{position: 'absolute', top: '11.81rem', left: '31.5rem', borderRadius: '10px', backgroundColor: 'rgba(217, 217, 217, 0.76)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0.19rem 0rem 0.19rem 0.19rem', whiteSpace: 'nowrap', zIndex: 2}}>
           
            
          </div>
          <button style={{cursor: 'pointer', border: 'none', padding: '0.25rem', backgroundColor: 'transparent', position: 'absolute', top: '19.5rem', left: '21.44rem', width: '24.69rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', zIndex: 2}}>
            <img style={{height: '100%', width: '100%', position: 'absolute', margin: '0 !important', top: '0rem', right: '0rem', bottom: '0rem', left: '0rem', borderRadius: '10px', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%'}} alt="" src={Rectangle}/>
            <div style={{height: '2.56rem', position: 'relative', fontSize: '2.13rem', fontWeight: 500, fontFamily: 'Urbanist', color: '#fff', textAlign: 'left', display: 'inline-block', zIndex: 1}}>
              Add to cart
            </div>
          </button>
        </div>  ))}
        <div style={{width: '54.31rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', maxWidth: '100%', color: '#fff', fontFamily: 'Urbanist'}}>
          <div style={{height: '4.32rem', width: '1.63rem', position: 'relative', fontWeight: 900, display: 'inline-block', flexShrink: 0, zIndex: 1}}>
            +
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default ListProduct

