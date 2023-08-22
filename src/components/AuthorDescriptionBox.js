

function AuthorDescriptionBox( {Author,closeDescriptionBox}) {
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
                    Author Name
                </p>
                <p className=" text-base border-b">
                    {Author}
                </p>
                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    Aithor Nationality
                </p>
                <p className=" border-b text-base ">
                    {Author}
                </p>
                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    Author Birth year
                </p>
                <p className=" border-b text-base">
                    {Author}
                </p>
                <p className=" text-left text-xs text-gray-500 mb-2 ">
                    Author Publications
                </p>
                <p className=" border-b text-base">
                    {Author}
                </p>
            </div>
            <button
                // onClick={() => setShowDetails(!showDetails)}
                className="tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            > Update </button>
        </div>
    );
}
export default AuthorDescriptionBox;