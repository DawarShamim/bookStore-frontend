
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Signup() {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className="flex-1 py-40 px-40 bg-slate-700">
                Signup
            </div>
            <Footer/>
        </div>);
};

export default Signup;