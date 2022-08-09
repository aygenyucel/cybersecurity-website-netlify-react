import React from 'react';
import './App.css';
import { Article, Brand, CTA, Navbar } from './components'; 
import { Blog, Features, Possibility, Footer, WhatGPT3, Header, Post } from './containers';

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'> 
          <Navbar />
          <Header />
        </div>
        <Post />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App