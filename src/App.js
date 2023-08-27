import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToastContainer from './components/ToastContainer';

import NewBook from './Pages/NewBook';
import Home from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Settings from './Pages/Settings';
import AdminDash from './Pages/AdminDash';
import Stores from './Pages/Stores';
import Signup from './Pages/Signup';
import Books from './Pages/Books';
import Authors from './Pages/Authors';
import Employees from './Pages/Employees';


import Trial from './Pages/Trial';
import Trying from './Pages/Trying';
import { PrivateRoute } from './Utils/PrivateRoute';
import CreateNewSales from './Pages/CreateNewSalesPage';
import Favourites from './Pages/Favourites';
import Page400 from './Pages/400Page';
import BookReview from './Pages/BookReview';

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
          <Route path="/ADashboard" element={<AdminDash />} />
          <Route path="/Stores" element={<Stores />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Authors" element={<Authors />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/GenerateSaleReceipt" element={<CreateNewSales />} />
          <Route path="/Favourite" element={<Favourites />} />
          <Route path="/BookDetails" element={<BookReview/>} />
          
          <Route path="/Forbidden" element={<Page400  type ={"403"}/>} />
          

          <Route path="*" element={<Page400 />} />

          <Route path="/try" element={<Trying />} />
          {/* <ProtectedRoute exact path="/Trail" component={<Trial/>} /> */}
          <Route exact path='/' element={<PrivateRoute  roles={["employee"]}/>}>
            <Route path="/Trial" element={<Trial />} />
          </Route>
          {/* <Route exact path='/' element={<Home />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;