import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer className='bg-gray-900 text-white grid justify-center p-10 drop-shadow-2xl'>
            <div className="Footer_socials__2fY9c">
                <h5 className="text-3xl text-center my-10">Social</h5>
                <ul className="flex justify-center gap-5">
                    <li>
                        <a href="https://www.instagram.com/gdsc-iiitt/" target="_blank" rel="noopener noreferrer">
                            <svg className='hover:scale-125 duration-300 hover:text-pink-500' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/gdsc-iiitt/" target="_blank" rel="noopener noreferrer">
                            <svg className='hover:scale-125 duration-300 hover:text-[#0a66c2]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/gdsc_iiitt/" target="_blank" rel="noopener noreferrer">
                            {/* <svg className='hover:scale-125 duration-300 hover:text-blue-300' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg> */}
                            <FaXTwitter className='hover:scale-125 duration-300' size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/G2pC3EN34x" target="_blank" rel="noopener noreferrer">
                            <svg className='hover:scale-125 duration-300 hover:text-purple-400' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <hr className='mt-3' />

            <section className='mt-10'>
                <p className='text-center text-xl mb-2'> Creators and Maintainers  </p>
                <div className='flex justify-center'>
                    <section className=''>
                        <p>Rishabh Singh</p>
                        <div className='flex gap-2 justify-center mt-1'>
                            <Link href='https://github.com/Rishabh705'><FaGithub className='hover:scale-125' /></Link>
                            <Link href='https://www.linkedin.com/in/Rishabh705'><FaLinkedinIn className='hover:scale-125' /></Link>
                        </div>
                    </section>
                    <div className='mx-5' style={{ width: "2px", backgroundColor: "white" }} />
                    <section className=''>
                        <p>Ayush Kumar</p>
                        <div className='flex gap-2  justify-center mt-1'>
                            <Link href='https://github.com/rtnAyush'><FaGithub className='hover:scale-125' /></Link>
                            <Link href='https://www.linkedin.com/in/rtnAyush'><FaLinkedinIn className='hover:scale-125' /></Link>
                        </div>
                    </section>
                </div>
            </section>
        </footer>
    )
}