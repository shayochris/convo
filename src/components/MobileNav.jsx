import {BsChatSquareTextFill} from "react-icons/bs";
import {AiFillSetting,AiOutlineMenu,AiOutlineSearch} from "react-icons/ai";
import {HiUsers} from "react-icons/hi";
import {MdLogout} from 'react-icons/md';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MobileNav({ setsearchmodal }) {
    const [mobilenav,setmobilenav]=useState(false);
  return (
    <div className='bg-white p-2 flex justify-between items-center 
    md:hidden border-b-[1px] border-gray-300 sticky top-0 left-0'>
        <p className='text-blue-700/80 font-semibold text-xl'>convo</p>
        <div className="flex items-center text-blue-700/80">
            <AiOutlineSearch onClick={()=>setsearchmodal(true)} className='w-5 h-5 mr-2'/>
            <AiOutlineMenu onClick={()=>setmobilenav(true)} className='w-5 h-5'/>
        </div>
        {mobilenav && 
        <div  className="fixed w-full h-screen top-0 left-0 z-20 flex">
            <div className="bg-blue-600 w-[60%] h-full">
                <div className="text-white">
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
                            <Link to="/signin" className="sidenav-link"><MdLogout className='mr-2 w-5 h-5'/>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div onClick={()=>setmobilenav(false)} className="w-[40%] h-full bg-black/50"></div>
        </div>
        }
    </div>
  )
}
