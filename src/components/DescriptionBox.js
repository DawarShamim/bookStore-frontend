import React from 'react';
import Modal from './Modal';

function DescriptionBox({ DataObject, closeDescriptionBox }) {
    return (
        <div className="bg-white h-full">
            <div className="text-right ">
                <button
                    onClick={() => { closeDescriptionBox(); }}
                    className="tracking-wider bg-gray-200 text-black shadow-lg font-medium border-black text-sm px-3 py-2.5 text-center"
                > X </button>
            </div>
            <div className="p-5 text-left">
                {Object.keys(DataObject).map((key) => (
                    <div key={key}>
                        <p className=" text-left text-xs capitalize text-gray-500 mb-2 ">
                            {key}
                        </p>
                        <p className=" text-base pl-3 border-b mb-2">{DataObject[key]}</p>
                    </div>))}
            </div>

            <Modal buttonTitle={"Update"} form={DataObject} modaltype={"Store"} />
        </div>
    );
}
export default DescriptionBox;