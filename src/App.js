import './App.css';
import Button from './components/Button';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './Pages/404Page';
import LoginPage from './Pages/LoginPage';
import NewBook from './components/NewBook';

function App() {
  return (


    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/NewBook" element={<NewBook />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/task/card" element={<CardView />} />
          <Route path="/setting" element={<Settings />} /> */}
          <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;