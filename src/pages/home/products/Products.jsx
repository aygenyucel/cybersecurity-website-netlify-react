import React from 'react';
import './products.css';
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients.ts";
import { motion, AnimatePresence } from "framer-motion";

function Products() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className='app__products section__margin'>
      <h1 className='gradient__text' id='products'>Our Products</h1>
      <div className="app__products-window " >
        <nav className='app__products-window_nav'>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className='app__products-main'>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ?
                <div className='app__products-main_selected'>
                  <div className='app__products-main_selected-img'>
                    <img src={selectedTab.imageURL}></img>
                  </div>
                  <div className='app__products-main_selected-content'>
                    <div>
                      <h1>{selectedTab.header}</h1>
                    </div>
                    <div>
                      <p>{selectedTab.description}</p>
                    </div>
                    <div className='app__products-button-div'>
                      <a href={selectedTab.buttonLink} target='_blank'>
                        <button className='app__products-button'>SEE PRODUCTS</button>
                      </a>
                    </div>
                  </div>
                </div>
              : ''}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Products