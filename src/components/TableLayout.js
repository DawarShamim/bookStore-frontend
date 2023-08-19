
import React from 'react';



function TableLayout({ keys,Data }) {
    console.log(keys[0]);
    return (
            <tbody>
                {Data.map((store) => (
                    <tr
                        key={store.id}
                        className="bg-white  hover:bg-slate-400 border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {store.name}
                        </th>
                        <td className="px-6 py-4">{store.city}</td>
                        <td className="px-6 py-4">{store.employees}</td>
                        <td className="px-6 py-4">{store.sales}</td>
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
    )
};
export default TableLayout;