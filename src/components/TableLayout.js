
import React, { useState } from 'react';



function TableLayout({ keys, Data, openDescriptionBox }) {
    return (
        <tbody>
            {Data.map((store) => (
                <tr
                    key={store.id}
                    onClick={() => openDescriptionBox(store)}
                    className="cursor-pointer bg-white hover:bg-slate-400 border-b dark:bg-gray-800 dark:border-gray-700">
                    {keys.map((key, index) => (
                        <td
                            key={index}
                            className="px-6 py-4">
                            {store[key]}
                        </td>
                    ))}
                    <td className="px-6 py-4 text-right">
                        <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Edit
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableLayout;