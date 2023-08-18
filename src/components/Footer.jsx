import React from 'react'
import{FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h3 className='w-full  text-3xl font-bold text-[#ff4c68]'>REACT.</h3>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nemo at nobis corporis, doloremque accusantium sit nihil, similique eos, autem ullam suscipit quia quibusdam maiores laboriosam temporibus recusandae eius rem.</p>
        <div className='flex justify-between md:w-[75%] my-6 '>
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
            <FaInstagramSquare size={30} />
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400 hover:text-white'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm '>Analytics</li>
                    <li className='py-2 text-sm '>Marketing</li>
                    <li className='py-2 text-sm '>Commerce</li>
                    <li className='py-2 text-sm '>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 hover:text-white'>Support</h6>
                <ul>
                    <li className='py-2 text-sm '>pricing</li>
                    <li className='py-2 text-sm '>Documentation</li>
                    <li className='py-2 text-sm '>Guides</li>
                    <li className='py-2 text-sm '>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 hover:text-white'>Company</h6>
                <ul>
                    <li className='py-2 text-sm '>About</li>
                    <li className='py-2 text-sm '>Blog</li>
                    <li className='py-2 text-sm '>Jobs</li>
                    <li className='py-2 text-sm '>Press</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 hover:text-white'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm '>Claim</li>
                    <li className='py-2 text-sm '>Policy</li>
                    <li className='py-2 text-sm '>Terms</li>
                    
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Footer