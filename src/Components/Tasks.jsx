import React from 'react';

const Tasks = ({ task, completeHandler }) => {
    const handleCompleteTask = () => {
        completeHandler(task)
    }
    return (
        <div className="bg-white p-3 rounded-sm shadow-sm mb-2 ">
            <h3 className="font-medium text-lg mb-2 ">{task.title}</h3>
            <button
                onClick={handleCompleteTask}
                className="btn bg-[#02A53B] hover:bg-[#028C32]  w-full text-white font-semibold"> Complete
            </button>
        </div>
    );
};

export default Tasks;