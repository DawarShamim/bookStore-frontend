import Footer from "../components/Footer";
import SideBar from "../components/SideBar"
import React from 'react'

function CreateNewSales() {
    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="m-20 h-4/6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        
                    </div>
                </div>
                <Footer />
            </div>
        </div>);
};

export default CreateNewSales;