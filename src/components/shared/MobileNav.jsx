import {BsChatSquareTextFill} from "react-icons/bs";
import {AiFillSetting,AiOutlineMenu,AiOutlineSearch} from "react-icons/ai";
import {HiUsers} from "react-icons/hi";
import {MdLogout} from 'react-icons/md';
import { Link } from "react-router-dom";
import { useState } from "react";
import bgimage from "../../assets/images/bgimage.jpg";

export default function MobileNav({ setsearchmodal }) {
    const [mobilenav,setmobilenav]=useState(false);
  return (
    <div className='bg-[#282828] px-4 py-2 flex justify-between items-center 
    md:hidden border-b-[1px] border-[#404040] sticky top-0 left-0 text-white'>
        <p className='text-[#1DB954] font-semibold text-2xl'>convo</p>
        <div className="flex items-center">
            <AiOutlineSearch onClick={()=>setsearchmodal(true)} className='w-6 h-6 mr-2'/>
            <AiOutlineMenu onClick={()=>setmobilenav(true)} className='w-6 h-6'/>
        </div>
        {mobilenav && 
        <div  className="fixed w-full h-screen top-0 left-0 z-20 flex">
            <div className="bg-[#3D3D3D] w-[60%] h-full">
                <div className="">
                    <div className="w-full bg-[#404040] text-white p-4 ">
                        <div className="w-12 h-12 avatar">
                            <img src={bgimage} alt="" className="avatar-img" />
                        </div>
                        <div>
                            <p className='font-semibold'>username</p>
                            <p className="text-xs">email@gmail.com</p>
                        </div>
                    </div> 
                    <ul>
                        <li>
                            <Link className="navlink"><BsChatSquareTextFill className='mr-2 w-5 h-5'/>chats</Link>
                        </li>
                        <li>
                            <Link className="navlink"><AiFillSetting className='mr-2 w-5 h-5'/>Settings</Link>
                        </li>
                        <li>
                            <Link className="navlink"><HiUsers className='mr-2 w-5 h-5'/>Contacts</Link>
                        </li>
                        <li>
                            <Link to="/signin" className="navlink"><MdLogout className='mr-2 w-5 h-5'/>Logout</Link>
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
