import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToastContainer from './components/ToastContainer';

import Page404 from './Pages/404Page';
import NewBook from './Pages/NewBook';
import Home from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Settings from './Pages/Settings';
import AdminDash from './Pages/AdminDash';
import Stores from './Pages/Stores';
import Signup from './Pages/Signup';
import Books from './Pages/Books';
import Authors from './Pages/Authors';


import Trial from './Pages/Trial';
import Trying from './Pages/Trying';

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/NewBook" element={<NewBook />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path ="/ADashboard" element={<AdminDash/>}/>
          <Route path ="/Stores" element ={<Stores/>}/>
          <Route path ="/Signup" element ={<Signup/>}/>
          <Route path ="/Books" element ={<Books/>}/>
          <Route path="/Authors" element={<Authors />}/>
          
          <Route path="*" element={<Page404 />} />
          
          <Route path="/try" element={<Trying />} />
          <Route path="/Trial" element={<Trial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;