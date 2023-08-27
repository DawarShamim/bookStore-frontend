import React, { useState } from "react";
import { PrivateRoute,CustomRender } from "../Utils/PrivateRoute";

function Trial() {
    const [searchInputAuthor, setSearchInputAuthor] = useState("");
    const [searchInputDescription, setSearchInputDescription] = useState("");
    const [searchInputWebsite, setSearchInputWebsite] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [DisablerStatus, setDisablerStatus] = useState(false);

    const [AuthorN_Field, setAuthorN_field] = useState(false);
    const [A_descriptionfield, setA_descriptionfield] = useState(false);
    const [Website_field, setWebsite_field] = useState(false);

    let countries = [
        { author: "Author 1", description: "Description 1", website: "Website 1" },
        { author: "Author 2", description: "Description 2", website: "Website 2" },
        { author: "Author 3", description: "Description 3", website: "Website 3" },
        { author: "saih 1", description: "Description sad", website: "Website 1" },
        { author: "Authdsajhor 2", description: "Descrisda", website: "Website 2" },
        { author: "Dawar", description: "sahdiaskhd", website: "Website 3" },

        // ... other countries
    ];
    const handleAuthorChange = (e) => {
        setSearchInputAuthor(e.target.value);
        setSelectedCountry(null);
        if (DisablerStatus) {
            Disabler("All")
        }
    };
    const handleDescriptionChange = (e) => {
        setSearchInputDescription(e.target.value);
        setSelectedCountry(null);
        if (DisablerStatus) {
            Disabler("All")
        }
    };
    const handleWebsiteChange = (e) => {
        setSearchInputWebsite(e.target.value);
        setSelectedCountry(null);
        if (DisablerStatus) {
            Disabler("All")
        }
    };
    const Disabler = (Enabledfield) => {
        setDisablerStatus(true);
        switch (Enabledfield) {
            case "AuthorName":
                setAuthorN_field(false);
                setA_descriptionfield(true);
                setWebsite_field(true);
                break;
            case "AuthorDescription":
                setAuthorN_field(true);
                setA_descriptionfield(false);
                setWebsite_field(true);
                break;
            case "AuthorWebsite":
                setAuthorN_field(true);
                setA_descriptionfield(true);
                setWebsite_field(false);
                break;
            case "All":
                setAuthorN_field(false);
                setA_descriptionfield(false);
                setWebsite_field(false);
                setDisablerStatus(false);
                break;

            default:
                break;
        }
    }
    const handleCountrySelect = (index, country) => {
        setSearchInputAuthor(country.author);
        setSearchInputDescription(country.description);
        setSearchInputWebsite(country.website);
        setSelectedCountry(country);
    };
    function searchList() {
        let filteredCountries = countries.filter((country) => {
            return (
                country.author.toLowerCase().includes(searchInputAuthor.toLowerCase()) &&
                country.description.toLowerCase().includes(searchInputDescription.toLowerCase()) &&
                country.website.toLowerCase().includes(searchInputWebsite.toLowerCase())
            );
        });

        const filtered = filteredCountries.map((country, index) => (
            <tr key={index} onClick={() => handleCountrySelect(index, country)} className="cursor-pointer">
                <td onClick={() => { Disabler("AuthorName") }}>{country.author}</td>
                <td onClick={() => { Disabler("AuthorDescription") }}>{country.description}</td>
                <td onClick={() => { Disabler("AuthorWebsite") }}>{country.website}</td>
            </tr>
        ));

        return <tbody>{filtered}</tbody>;
    }

    return (
        <section className='flex p-10 h-screen justify-between  '>

        <CustomRender roles={["guest"]} children={(
        <div className="h-screen bg-slate-700">
        <button className="bg-black text-white">dawar</button>
            <p>sdghasghjg</p>
        </div>)}/>
            <div className="App w-1/2 flex justify-center items-center bg-slate-700 flex-col m-0.5">
                <label className='relative cursor-pointer mb-4'>
                    <input
                        type="text"
                        placeholder="Input"
                        onChange={handleAuthorChange}
                        value={searchInputAuthor}
                        disabled={AuthorN_Field}
                        // onChange={(event) => handleFieldChange('author_name', event)}
                        // onKeyDown={handleKeyDown}
                        className='h-10 w-60 px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                    <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Author Name</span>
                </label>
                <label className='relative cursor-pointer mb-4'>
                    <input
                        type="text"
                        placeholder="Input"
                        onChange={handleDescriptionChange}
                        value={searchInputDescription}

                        disabled={A_descriptionfield}

                        // onChange={(event) => handleFieldChange('author_name', event)}
                        // onKeyDown={handleKeyDown}
                        className='h-10 w-60 px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                    <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Author Description</span>
                </label>
                <label className='relative cursor-pointer mb-4'>
                    <input
                        type="text"
                        placeholder="Input"
                        onChange={handleWebsiteChange}
                        value={searchInputWebsite}
                        disabled={Website_field}

                        // onChange={(event) => handleFieldChange('author_name', event)}
                        // onKeyDown={handleKeyDown}
                        className='h-10 w-60 px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                    <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Website</span>
                </label>
            </div>
            <div className="App w-1/2 flex justify-center items-center bg-slate-700 flex-row m-0.5 SidePanel">
                {(searchInputWebsite || searchInputAuthor || searchInputDescription ) && (
                    <div className="bg-white flex">
                        <table style={{ tableLayout: "fixed", width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Description</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            {searchList()}
                        </table>
                        {selectedCountry && (
                            <div>
                                <h3>Selected Country:</h3>

                            </div>
                        )}
                    </div>
                    )}
            </div>
        </section>
    );
}

export default Trial;