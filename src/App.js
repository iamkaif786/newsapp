import './App.css';

import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => { 
  const pageSize = 15; const country = 'in'; const apiKey= process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
    return (
      <>
        <div>
          <Router>
            <NavBar />
            <LoadingBar
              color='#f11946'
              progress={progress}
              height = {3}
            />

            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}> </Route>
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}key="business" pageSize={pageSize} country={country} category="business" />}> </Route>
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}> </Route>
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}key="general" pageSize={pageSize} country={country} category="general" />}> </Route>
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}key="health" pageSize={pageSize} country={country} category="health" />}> </Route>
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}key="science" pageSize={pageSize} country={country} category="science" />}> </Route>
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}key="sports" pageSize={pageSize} country={country} category="sports" />}> </Route>
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}key="technology" pageSize={pageSize} country={country} category="technology" />}> </Route>
            </Routes>
          </Router>

          {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
        </div>

      </>
    )
}

export default App;