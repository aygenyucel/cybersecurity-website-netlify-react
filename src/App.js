import React, { useEffect } from 'react';
import './App.css';
import { Brand, Footer, Navbar, ScrollToTop} from './components'; 
import { BlogSection, Features, Solutions, Company, ContactSection, ContactPage, BlogPage, Post, Header } from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Routes>
            <Route 
              path="/" 
              element= {<>
                  <div className='gradient__bg'> 
                    <Navbar />
                    <Header />
                  </div>
                    <Brand />
                    <Solutions />
                    <Features />
                    <BlogSection />
                    <ContactSection />
                    <Footer /></>} 
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
              element= {<><div className='gradient__bg'><Navbar/><ContactPage /><Footer/></div></>}
            />
            <Route 
              path='/blog' 
              element= {<><div className='gradient__bg'><Navbar/><BlogPage /><Footer/></div></>}
            />
            <Route 
              path='/blog/:postId' 
              element= {<><div className='gradient__bg'><Navbar/><Post /><Footer/></div></>}
            />
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App