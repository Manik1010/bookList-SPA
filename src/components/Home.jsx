import React from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Jobs from './Jobs'

const Home = () => {
  const dataSet = useLoaderData()
  // console.log(dataSet);
  return (

    // <h>Home</h>
    <div>
      <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
        {/* Text Content */}
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <h2 className='max-w-lg mb-6 font-sans text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              One Step <br /> Closer To Your  <br />
              <span className='inline-block text-blue-400'>Dream Job</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <Link to='/books' className='btn md:w-auto md:mr-4'>
              <div className='inline-flex items-center justify-center w-full h-full'>
                <p className='mr-3'>Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div >
            <img src="./../../public/All Images/P3OLGJ1 copy 1.png" alt=""/>
          </div>
        </div>
      </div>
      <div className='lg:ml-36 md:ml-36 sm:ml-16'>
        <h1 className='font-bold text-4xl text-center mt-4'>Job Category List</h1>
        <p className='text-center my-4'> Explore thousands of job opportunities with all the information you need. Its your future</p>

        <div className="grid gap-8 lg:grid-cols- md:grid-cols-4 sm:grid-cols-2'">
          <div className=" logo_cart">
            <div>
              <img src="./../../public/Icons/accounts 1.png" alt="" />
              {/* <h2>Logo</h2> */}
            </div>
            <div className='my-4'>
              <h3 className='font-bold'>Account & Finance</h3>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className=" logo_cart">
            <div>
            <img src="./../../public/Icons/business 1.png" alt="" />  
            </div>
            <div className='my-4'>
              <h3 className='font-bold'>Marketing & Sales</h3>
              <p className="text-sm">150 Jobs Available</p>
            </div>
          </div>
          <div className=" logo_cart">
            <div>
            <img src="./../../public/Icons/Frame-1.png" alt="" />  
            </div>
            <div className='my-4'>
              <h3 className='font-bold'>Creative Design</h3>
              <p>100 Jobs Available</p>
            </div>
          </div>
          <div className=" logo_cart">
            <div>
            <img src="./../../public/Icons/chip 1.png" alt="" />  
            </div>
            <div className='my-4'>
              <h3 className='font-bold'>Engineering Job</h3>
              <p>224 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:ml-36 md:ml-36 sm:ml-16'>
        <h1 className='font-bold text-4xl text-center mt-4'>Featured Jobs</h1>
        <p className='text-center my-4'> Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid gap-8 mb-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
        {dataSet.map(data => (
          // <Book key={book.isbn13} book={book} /> 
          <Jobs key={data.isbn13} data={data}></Jobs>
        ))}
          
        </div>
        <button className='btn my-4 ml-96'>See All</button>
      </div>
    </div>
  )
}

export default Home
