import React, { useState } from "react";
import ToastContainer from '../components/ToastContainer'; // Update the import path
import TableLayout from "../components/TableLayout";

function Page404() {
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        ToastContainer.showToast('Login successful!', 'error', handleCloseAlert);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const keys =["name","city","sales","orders","employees"];
    
    const Data = [
        {
            "id": 1,
            "name": "Bookstore Outlet A",
            "city": "New York",
            "sales": 15000,
            "orders": 1200,
            "employees": 850
        },
        {
            "id": 2,
            "name": "Bookstore Outlet B",
            "city": "Los Angeles",
            "sales": 18000,
            "orders": 1400,
            "employees": 950
        },
        {
            "id": 3,
            "name": "Bookstore Outlet C",
            "city": "London",
            "sales": 12000,
            "orders": 1000,
            "employees": 700
        },
        {
            "id": 4,
            "name": "Bookstore Outlet D",
            "city": "Sydney",
            "sales": 22000,
            "orders": 1600,
            "employees": 1100
        }
        // Add more store objects as needed
    ];
    return (
        <div>
            <h4>uh oh! </h4>
            <p>We couldn't find what you were searching for. Try cheching the spelling or try again Later.</p>
            <button onClick={handleShowAlert}>Show Alert</button>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" className="px-6 py-3 uppercase">
                            Store name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                City
                                <a href="#">
                                    <svg
                                        className="w-3 h-3 ml-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Employees
                                <a href="#">
                                    <svg
                                        className="w-3 h-3 ml-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Sales
                                <a href="#">
                                    <svg
                                        className="w-3 h-3 ml-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>

                    <TableLayout keys={keys} Data={Data} />

                </table>
        </div>


    );
}

export default Page404;