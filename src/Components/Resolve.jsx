import React from 'react';

const Resolve = ({resolve}) => {
    return (
        <div className="bg-[#E0E7FF] p-3 rounded-sm shadow-sm mb-2 ">
            <h3 className="font-medium text-lg ">{resolve.title}</h3>
        </div>
    );
};

export default Resolve;