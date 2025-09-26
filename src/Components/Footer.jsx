import React from 'react';
import x from '../assets/x.png';
import facebook from "../assets/fi_5968764.png";
import linkedin from "../assets/in.png";
import mail from "../assets/fi_6244710.png";
const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-8">

            <div className="container mx-auto px-4">
                <div className="flex justify-between md:flex-row flex-col ">
                    <div>
                        <h3 className="text-white font-bold mb-3 text-2xl">
                            CS — Ticket System
                        </h3>
                        <p className="max-w-88 text-justify text-[#A1A1AA] mb-6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Company</h4>
                        <ul className="space-y-3 text-[#A1A1AA]  mb-6">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Services</h4>
                        <ul className="space-y-3 text-[#A1A1AA]  mb-6">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Information</h4>
                        <ul className="space-y-3 text-[#A1A1AA]  mb-6">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Social Links</h4>
                        <ul className="space-y-3 text-[#A1A1AA]  mb-6">
                            <li className="flex gap-2 items-center">
                                <img src={x} className="w-[20px] h-[20px]" alt="" />
                                @CS — Ticket System</li>
                            <li className="flex gap-2 items-center">
                                <img src={linkedin} className="w-[20px] h-[20px]" alt="" />
                                @CS — Ticket System</li>
                            <li className="flex gap-2 items-center">
                                <img src={facebook} className="w-[20px] h-[20px]" alt="" />
                                @CS — Ticket System</li>
                            <li className="flex gap-2 items-center">
                                <img src={mail} className="w-[20px] h-[20px]" alt="" />
                                support@cst.com</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-[#FAFAFA] mt-8 border-t border-[#E5E7EB]/20 pt-8">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>
            </div>

        </footer>
    );
};

export default Footer;