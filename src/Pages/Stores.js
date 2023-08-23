import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import TableLayout from "../components/TableLayout";
import DescriptionBox from "../components/DescriptionBox";

function Stores() {
    const [Descriptionbox, setDescriptionbox] = useState(false);
    const [StoreDetails, setStoreDetails] = useState('');

    const StoreData = [
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

    const Keys = ["name", "city", "sales", "employees"];


    const openDescriptionBox = (Store) => {
        setDescriptionbox(true);
        setStoreDetails(Store);
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
                            <TableLayout keys={Keys} Data={StoreData} openDescriptionBox={openDescriptionBox} />
                        </table>
                        {Descriptionbox && (
                            <div className="w-3/4 p-2 border-l-2 text-sm text-gray-700 bg-gray-200 ">
                                <DescriptionBox DataObject={StoreDetails} closeDescriptionBox={closeDescriptionBox} />
                            </div>)}
                    </div>
                </div>
                <Footer />
            </div>
        </div>);
};

export default Stores;