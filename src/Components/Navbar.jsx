import React from 'react';


const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-sm py-4 px-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <p className="font-bold text-xl md:text-2xl p-0 whitespace-nowrap">CS — Ticket System</p>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 hidden md:flex">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <button className="px-2 md:px-4 py-2 text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#7140ec] hover:to-[#401380] rounded-md">+  New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;