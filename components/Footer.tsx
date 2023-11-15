import Link from 'next/link';
import React from 'react'
import { FaGithub, FaHeart, FaLinkedinIn, } from 'react-icons/fa';


export default function Footer() {

    return (
        <footer className='bg-gray-900 text-white grid justify-center p-10 drop-shadow-2xl'>
            <div className='flex gap-2 text-lg'>
                <span>  Made with  </span>
                <span className="relative flex">
                    <FaHeart className='animate-ping absolute' style={{ color: '#e74c3c' }} />
                    <FaHeart className="relative inline-flex opacity-75" style={{ color: 'red' }} />
                </span>
                <span> by </span>
                <span className='cursor-pointer hover:scale-110'> Ayush </span>
            </div>
            <div className='flex justify-center'>
                <img src="https://drive.google.com/file/d/1rWWtN7m5AvtMGu0e0PBCi_8ZfS3x8ELR/view?usp=drive_link" alt="" />
                <div className='flex gap-2'>
                    {/* <Link to='https://rtn-ayush-kumar.netlify.app/'><FaUserTie className='hover:scale-125' /></Link> */}
                    <Link href='https://github.com/Ayush211107'><FaGithub className='hover:scale-125' /></Link>
                    <Link href='https://www.linkedin.com/in/rtn-ayush-kumar/'><FaLinkedinIn className='hover:scale-125' /></Link>
                </div>
            </div>
        </footer>
    )
}