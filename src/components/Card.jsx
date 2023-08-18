import React from 'react'
import single from '../images/single.png'
import double from '../images/double.png'
import triple from '../images/triple.png'
const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white text-black'>
        <div className='max-w-[1240px] grid mx-auto gap-8 md:grid-cols-3'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='text-2xl font-bold py-2 text-center '>Single User</h2>
            <p className='text-xl font-bold text-center'>$140</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
              <p className='py-2 border-b mx-8'>Granted user</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className="bg-[#ff4c68] text-black py-2 rounded-md font-medium mx-auto my-6 w-[200px] hover:text-white" >Start Trial</button>
            </div>
          <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/" />
            <h2 className='text-2xl font-bold py-2 text-center '>Single User</h2>
            <p className='text-xl font-bold text-center'>$140</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
              <p className='py-2 border-b mx-8'>Granted user</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className="text-[#ff4c68] bg-black py-2 rounded-md font-medium mx-auto my-6 w-[200px] hover:text-white" >Start Trial</button>
            </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
            <h2 className='text-2xl font-bold py-2 text-center '>Single User</h2>
            <p className='text-xl font-bold text-center'>$140</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
              <p className='py-2 border-b mx-8'>Granted user</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className="bg-[#ff4c68] text-black py-2 rounded-md font-medium mx-auto my-6 w-[200px] hover:text-white" >Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Card