import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Authors() {

    return (<div className='flex bg-slate-700'>
        <SideBar />
        <div className="flex-grow">

            {/* Contents */}
            <Footer />
        </div>
    </div>)
};

export default Authors;