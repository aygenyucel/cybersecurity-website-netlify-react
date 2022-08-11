import React from 'react';
import './App.css';
import { Article, Brand, CTA, Navbar } from './components'; 
import { Blog, Features, Footer, Solutions, Header, Company, ContactUs, Contact, AllPost, Post } from './containers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //deneme
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <div className='gradient__bg'> 
                  <Navbar />
                  <Header />
                </div>
                  <Brand />
                  <Solutions />
                  <Features />
                  <Blog />
                  <ContactUs />
                  <Footer />
              </>
            } 
          />

          <Route
            path='/login'
            element= {<><Navbar/><Footer /></>}
          />
          <Route
            path='/company'
            element= {<><Navbar/><Company /><Footer/></>}
          />
          <Route
            path='/contact'
            element= {<><div className='gradient__bg'><Navbar/><Contact /><Footer/></div></>}
          />
          <Route 
            path='/blog' 
            element= {<><div className='gradient__bg'><Navbar/><AllPost /><Footer/></div></>}
          />
          <Route 
            path='/AllPost/:postId' 
            element= {<><div className='gradient__bg'><Navbar/><Post /><Footer/></div></>}
          />
        
          
        </Routes>
      </div>
    </Router>


  )
}

export default App