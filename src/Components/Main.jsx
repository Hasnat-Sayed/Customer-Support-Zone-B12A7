import React, { use } from 'react';

import Tickets from './Tickets';
const Main = ({fetchTickets}) => {
     const tickets = use(fetchTickets)
     console.log(tickets)

    return (
        <div className=" bg-[#F5F5F5] pb-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-5 px-4">
                <div className='md:col-span-5'>
                    <h2 className="text-2xl font-semibold mb-4">Customer Tickets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        tickets.map(ticket =><Tickets ticket={ticket}></Tickets>)
                    }
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Task Status</h2>

                    <div className='h-20 w-full bg-amber-200'></div>
                    <div>
                        <h2 className="text-2xl font-semibold mt-4 my-4">Resolved Task</h2>
                        <div className='h-20 w-full bg-amber-300'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;