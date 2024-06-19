import React from 'react';
import Navigation from './nav';
import Main from './main';
import Header from './header';
import Aside from './aside';


const Subcontainer = () => {

    return (
  
       <>
          <div className='row'>
  
          <Header />

          <br />

          <Navigation />

         

          <Main />

          <Aside />

            
  
  
          </div>
       
       
       
       
       
       </>
  
  
  
  );
  
  
  
  }
  
  export default Subcontainer;