import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './Pages/404Page';
import LoginPage from './Pages/LoginPage';
import NewBook from './Pages/NewBook';
import Trial from './Pages/Trial';
import SideBar from "./components/SideBar";
import Home from "./Pages/HomePage";
import Trial2 from "./Pages/Trial2";

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
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/Trial2" element={<Trial2 />} />
          {/*<Route path="/task/card" element={<CardView />} />
          <Route path="/setting" element={<Settings />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;