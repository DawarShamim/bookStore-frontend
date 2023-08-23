import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import TableLayout from "../components/TableLayout";
import StoreDescriptionBox from "../components/StoreDescriptionBox";

function Employees() {
    const [Descriptionbox, setDescriptionbox] = useState(false);
    const [EmployeeDetails, setEmployeeDetails] = useState('');

    const EmployeeData = [
        {
            "id": 1,
            "Store_Name": "Bookstore Outlet A",
            "name": "New York",
            "Employee_Number": 15000,
            "contact": 1200,
            "employees": 850
        },
        {
            "id": 2,
            "Store_Name": "Bookstore Outlet B",
            "name": "Los Angeles",
            "Employee_Number": 18000,
            "contact": 1400,
            "employees": 950
        },
        {
            "id": 3,
            "Store_Name": "Bookstore Outlet C",
            "name": "London",
            "Employee_Number": 12000,
            "contact": 1000,
            "employees": 700
        },
        {
            "id": 4,
            "Store_Name": "Bookstore Outlet D",
            "name": "Sydney",
            "Employee_Number": 22000,
            "contact": 1600,
            "employees": 1100
        }
      
    ];
    const Keys = ["name", "Employee_Number", "Store_Name", "contact"];


    const openDescriptionBox = (Employee) => {
        setDescriptionbox(true);
        setEmployeeDetails(Employee);
    };

    const closeDescriptionBox = () => {
        setDescriptionbox(false);
    };

    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="m-10 h-5/6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Employee Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Employee Number
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
                                            Store Name
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
                                            Contact
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
                            <TableLayout keys={Keys} Data={EmployeeData} openDescriptionBox={openDescriptionBox} />
                        </table>
                        {Descriptionbox && (
                            <div className="w-3/4 p-2 border-l-2 text-sm text-gray-700 bg-gray-200 ">
                                <StoreDescriptionBox Store={EmployeeDetails} closeDescriptionBox={closeDescriptionBox} />
                            </div>)}
                    </div>
                </div>
                <Footer />
            </div>
        </div>);
};

export default Employees;