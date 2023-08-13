import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './Pages/404Page';
import Dawar from './Pages/Trial3';
import NewBook from './Pages/NewBook';
import Trial from './Pages/Trial';
import Home from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Trying from './Pages/Trying';

function App() {
  return (


    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/Signup" element={<SignupPage/>} /> */}
          <Route path="/NewBook" element={<NewBook />} />
          <Route path="/Trial" element={<Trial />} />
          <Route path="/Trial3" element={<Dawar />} />
          <Route path="/try" element={<Trying />} />
          {/* <Route path="/setting" element={<Settings />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;