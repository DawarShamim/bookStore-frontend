import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../Utils/Helper";


function SideBar() {
    const navigate = useNavigate();

    const handleSignOut = async() => {
        await Logout();
        navigate("/login");
    };

    const menus = [
        { name: "Dashboard", link: "/ADashboard", icon: MdOutlineDashboard },
        { name: "Stores", link: "/Stores", icon: TbReportAnalytics, margin: true },
        { name: "Employees", link: "/Employees", icon: AiOutlineUser },
        { name: "Books", link: "/Books", icon: FiMessageSquare },
        { name: "Authors", link: "/Authors", icon: FiFolder },
        { name: "*Cart", link: "/", icon: FiShoppingCart },
        { name: "Favourites", link: "/Favourite", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/Settings", icon: RiSettings4Line },
        { name: "Sign Out", icon: MdOutlineLogout }
    ];
    const [open, setOpen] = useState(false);
    return (
        <section className="flex gap-6 z-50">
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72 " : "w-16 "
                } duration-500 text-gray-100 px-4`}>
                <div className="fixed ">
                <div className="pt-5 flex ">
                    {open && ( 
                        <div className={`px-4 text-white font-semibold flex justify-start ${open ? "w-56 text-xl" : "hidden overflow-hidden"} duration-500`}>
                            E-Book
                        </div>
                         )} 
                    <div>
                        <HiMenuAlt2
                            size={26}
                            className="cursor-pointer justify-end"
                            onClick={() => setOpen(!open)} />
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            onClick={menu.name === "Sign Out" ? handleSignOut : undefined}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};
export default SideBar;