import React from 'react';
import calender from '../assets/calendar-line.png'
const Tickets = ({ ticket, progressHandler }) => {

    const handleProgress = () =>{
        progressHandler(ticket)
    }
    return (
        <div onClick={handleProgress} className=" bg-white p-4 rounded-md shadow-md cursor-pointer ">
            <div className="flex justify-between items-center">

                <h2 className="md:text-lg font-medium">{ticket.title}</h2>
                <div className={`flex justify-center items-center rounded-full px-3 py-1 ${ticket.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
                    }`}>
                    <span className={`rounded-full h-4 w-4 mr-2 bg-[#02A53B] ${ticket.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
                        } `}></span>
                    <p className={` font-medium  ${ticket.status === "Open" ? "text-[#0B5E06]" : "text-[#9C7700]"
                        }`}>{ticket.status}</p>
                </div>
            </div>
            <div>
                <p className="text-[#627382] mt-2">{ticket.description}</p>
            </div>
            <div className="flex flex-col md:flex-row text-[#627382] md:items-center justify-between mt-3 text-sm">
                <div className="flex gap-2 md:gap-4">
                    <p className="font-medium">#{ticket.id}</p>

                    <p className={`font-medium ${ticket.priority === "HIGH PRIORITY"
                        ? "text-[#F83044]"
                        : ticket.priority === "MEDIUM PRIORITY"
                            ? "text-[#FEBB0C]"
                            : ticket.priority === "LOW PRIORITY"
                                ? "text-[#02A53B]"
                                : ""
                        }`}>{ticket.priority}
                    </p>


                </div>
                <div className="flex gap-2 md:gap-4 pt-3 md:pt-0">
                    <p>{ticket.customer}</p>
                    <div className="flex items-center gap-1">
                        <img src={calender} alt="" />
                        <p>{ticket.createdAt}</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Tickets;