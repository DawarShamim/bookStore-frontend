import React, { useState } from 'react';
import Modal from './Modal';

function StoreDescriptionBox({ Store, closeDescriptionBox }) {
    console.log(Store);
    return (
        <div className="bg-white h-full">
            <div className="text-right ">
                <button
                    onClick={() => { closeDescriptionBox(); }}
                    className="tracking-wider bg-gray-200 text-black shadow-lg font-medium border-black text-sm px-3 py-2.5 text-center"
                > X </button>
            </div>
            <div className="p-5 text-left">

                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    Store Name
                </p>
                <p className=" text-base border-b">{Store.Employee_Number}</p>

                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    City
                </p>
                <p className=" text-base border-b">{Store.Store_Name}</p>
                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    Sales
                </p>
                <p className=" text-base border-b">{Store.contact}</p>
                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    Employees
                </p>
                <p className=" text-base border-b">{Store.employees}</p>
                <p className=" text-base border-b">{Store.name}</p>
            </div>

            <Modal buttonTitle={"Update"} form={Store} modaltype={"Store"} />
        </div>
    );
}
export default StoreDescriptionBox;