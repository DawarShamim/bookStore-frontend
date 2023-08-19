import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Bar } from 'react-chartjs-2';
import React from "react";
import ChartComponent from "../components/ChartComponent";

function AdminDash() {


    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                {/* Main content */}
                <div className="flex-grow p-10">
                    {/* Top analytics section */}
                    <div className="mx-auto w-full ">   
                        {/* <canvas
                            data-te-chart="line"
                            data-te-dataset-label="Traffic"
                            data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
                            data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]">
                        </canvas> */}
                        {/* <ChartComponent/> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Total Sales */}
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            {/* Display total sales analytics */}
                        </div>

                        {/* Top Selling Books */}
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            {/* Display top selling books analytics */}
                        </div>
                    </div>

                    {/* Outlet Analytics */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-8">
                        {/* Display outlet-wise analytics */}
                    </div>

                    {/* Monthly Sales */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-8">
                        {/* Display monthly sales analytics */}
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-8">
                        {/* Display recent orders */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}


export default AdminDash;