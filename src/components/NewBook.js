import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isbnValue, setIsbnValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        console.log('Input Value:', inputValue);
        console.log('ISBN Value:', isbnValue);
    };
    const handleFieldChange = (fieldName, event) => {
        const value = event.target.value;
        switch (fieldName) {
            case 'input':
                setInputValue(value);
                break;
            case 'isbn':
                setIsbnValue(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="App h-screen flex justify-center items-center bg-black flex-col">
            <label className='relative cursor-pointer mb-2'>
                <input
                    type="text"
                    placeholder="Input"
                    value={inputValue}
                    onChange={(event) => handleFieldChange('input', event)}
                    onKeyDown={handleKeyDown}
                    className='h-10 w-48 px-3 text-xs text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                />
                <span className='text-1xl text-white text-opacity-80 bg-black absolute left-2 top-2 px-0.5 transition duration-200 input-text'>Input</span>
            </label>

            <label className='relative cursor-pointer mb-4'>
                <input
                    type="text"
                    placeholder="ISBN"
                    value={isbnValue}
                    onChange={(event) => handleFieldChange('isbn', event)}
                    onKeyDown={handleKeyDown}
                    className='h-20 w-96 px-6 text-4xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                />
                <span className='text-4xl text-white text-opacity-80 bg-black absolute left-5 top-5 px-1 transition duration-200 input-text'>ISBN</span>
            </label>
            <button onClick={handleSubmit} className="text-white bg-blue-500 p-2 rounded-lg">Submit</button>
        </div>
    );
}

export default App;
