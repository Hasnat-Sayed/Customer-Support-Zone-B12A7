import React, { use, useState } from 'react';
import Tickets from './Tickets';
import Banner from './Banner';
import Tasks from './Tasks';
import Resolve from './Resolve';
const Main = ({ fetchTickets, resolves, setResolve, tasks, setTasks }) => {
    const initialTickets = use(fetchTickets)
    const [tickets, setTickets] = useState(initialTickets)

    // console.log(tickets)

    const progressHandler = (ticket) => {
        const newTask = ticket
        const updated = [...tasks, newTask]
        setTasks(updated)
        ticket.status = "In-Progress"
        // alert("added to tasks")
    }

    const completeHandler = (task) => {
        const filtered = tasks.filter(ele => task.id !== ele.id)
        setTasks(filtered)

        const afterRemove = tickets.filter(ticket => ticket.id !== task.id)
        setTickets(afterRemove)

        const newResolve = task
        const updated = [...resolves, newResolve]
        setResolve(updated)

    }
    

    return (
        <>

            

            <div className=" bg-[#F5F5F5] pb-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-5 px-4">

                    <div className='md:col-span-5'>
                        <h2 className="text-2xl font-semibold mb-4">Customer Tickets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {
                                tickets.map(ticket => <Tickets key={ticket.id} progressHandler={progressHandler} ticket={ticket} ></Tickets>)
                            }
                        </div>
                    </div>


                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4">Task Status</h2>
                        {
                            tasks.length === 0 ? (
                                <div className='min-h-20 w-full'>
                                    <p className=" text-[#627382]">
                                        Select a ticket to add to Task Status
                                    </p>
                                </div>) : (
                                tasks.map((task, ind) => <Tasks key={ind} task={task} completeHandler={completeHandler}></Tasks>)
                            )
                        }

                        <div>
                            <h2 className="text-2xl font-semibold mt-10 mb-4">Resolved Task</h2>

                            {
                                resolves.length === 0 ? (
                                    <div className='min-h-20 w-full'>
                                        <p className=" text-[#627382]">
                                            No resolved tasks yet.
                                        </p>
                                    </div>
                                ) : (
                                    resolves.map(resolve =><Resolve resolve={resolve}></Resolve> 
                                    )
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Main;