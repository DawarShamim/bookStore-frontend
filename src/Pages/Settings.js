import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";

function Settings() {
    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="m-10 h-5/6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  bg-slate-500">
                        <div className="flex p-10">
                            <div className="grid grid-cols-1 w-1/2 text-sm text-center p-3">
                                <label className="w-full text-sm text-center border-b mb-3 font-bold">Name</label>
                                <label className="w-full text-sm text-center border-b mb-3 font-bold" >Employee Number</label>
                            </div>
                            <div className="grid grid-cols-1 w-1/2 text-sm text-center p-3">
                                <label className="w-full text-sm text-center border-b mb-3 font-bold">ABC</label>
                                <label className="w-full text-sm text-center border-b mb-3 font-bold">ABC</label>
                            </div>
                        </div>
                        <div>
                            <Modal ModalTitle={"Update Profile"} buttonTitle={"Update Profile"}></Modal>
                        </div>
                    </div>
                </div>
                {/* Contents */}
                <Footer />
            </div>
        </div>)
};

export default Settings;