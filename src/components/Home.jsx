import { Link } from 'react-router-dom'
import {BsChatSquareText, BsChatSquareTextFill} from "react-icons/bs";
import {AiFillSetting,AiOutlineMenu,AiOutlineSearch} from "react-icons/ai";
import {HiUsers} from "react-icons/hi";
import {MdLogout} from 'react-icons/md';
import Search from './Search';
import MobileNav from './MobileNav';
import { useState } from 'react';
export default function Home() {
    const [searchmodal,setsearchmodal]=useState(false);
  return (
    <div className='w-full h-screen flex'>
        <div className="sidenav">
            <div className="w-full bg-blue-700/80 p-4">
                <div className="w-16 h-16 avatar"></div>
                <div>
                    <p className='font-semibold'>username</p>
                    <p className="text-xs">email@gmail.com</p>
                </div>
            </div> 
            <ul>
                <li>
                    <Link className="sidenav-link"><BsChatSquareTextFill className='mr-2 w-5 h-5'/>chats</Link>
                </li>
                <li>
                    <Link className="sidenav-link"><AiFillSetting className='mr-2 w-5 h-5'/>Settings</Link>
                </li>
                <li>
                    <Link className="sidenav-link"><HiUsers className='mr-2 w-5 h-5'/>Contacts</Link>
                </li>
                <li>
                    <Link className="sidenav-link"><MdLogout className='mr-2 w-5 h-5'/>Logout</Link>
                </li>
            </ul>
        </div>
        <div className="main-div">
            <div className="dashboard-nav text-blue-700/80">
                <p>Convo</p>
                <div className='flex items-center'>
                    
                    
                    <input onClick={()=>setsearchmodal(true)} 
                    type="text" className="search mr-4 hidden md:block" placeholder='search' />
                </div>
            </div>
            {searchmodal &&<Search setsearchmodal={setsearchmodal} />}
            <MobileNav setsearchmodal={setsearchmodal}/>
            <div className='p-4'>
                {[...Array(20)].map((n)=>(
                     <div key={n} className='bg-white p-2'>
                        <div className="flex">
                            <div className=''>
                                <div className="w-12 h-12 avatar"></div>
                            </div>
                            
                            <div className='ml-3 w-[80%] border-b-[1px] border-gray-200 pb-1'>
                                <div className='flex justify-between items-center'>
                                    <p className="font-semibold">username</p>
                                    <p className='text-sm text-blue-600'>now</p>
                                </div>
                                
                                <p className='text-gray-600 text-sm'>  totam! Architecto non aliquam facilis.</p>
                            </div>
                        </div>  
                    </div>
                ))}
               
            </div>
        </div>
        <div className="fixed bottom-12 right-12 z-10 md:hidden bg-blue-700 h-12 w-12 rounded-full flex justify-center items-center">
            <BsChatSquareText className='text-white w-5 h-5' />
        </div>
    </div>
  )
}
