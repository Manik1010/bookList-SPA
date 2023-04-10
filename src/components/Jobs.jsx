import React from 'react';

const Jobs = ({ data }) => {

    console.log(data);
    return (
        <div>
            {/* Jobs */}
            <div className='my-4 border-5'>
                <img
                    src={data.picture}
                    alt='job cover'
                    className='object-cover w-24 h-24 md:h-24 xl:h-8 my-2'
                />
                <h1 className='font-bold'>{data.name}</h1>
                <h3 className='my-2'>{data.title}</h3>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-2">
                    Button
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4 my-2">
                    Button 2
                </button>
                <div className='flex flex-row my-4 gap-2'>
                    <img src="./../../public/Icons/Location Icon.png" alt="" className='w-8 h-8'/>
                    <p>{data.addrese}</p>
                    <img src="./../../public/Icons/Frame.png" alt="" className='w-6 h-6'/>
                    <h5>$ Salary: {data.price}</h5>
                </div>
                <button className='btn md:w-auto md:mr-4'>View Diteles</button>

            </div>
        </div>
    );
};

export default Jobs;