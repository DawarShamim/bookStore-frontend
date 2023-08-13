import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './Pages/404Page';
import Trial3 from './Pages/Trial3';
import NewBook from './Pages/NewBook';
import Trial from './Pages/Trial';
import Home from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

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
          <Route path="/Trial3" element={<Trial3 />} />
          {/*<Route path="/task/card" element={<CardView />} />
          <Route path="/setting" element={<Settings />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;