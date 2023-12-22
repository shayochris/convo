import {BsChatSquareText} from "react-icons/bs";
import Search from './Search';

import { useState } from 'react';
import bgimage from '../assets/images/bgimage.jpg'
import SideNav from './shared/SideNav';
import MobileNav from "./shared/MobileNav";
import Chats from "./shared/Chats";


export default function Home() {
    const [searchmodal,setsearchmodal]=useState(false);
  return (
    <div className='w-full h-screen flex bg-[#282828]'>
       <SideNav bgimage={bgimage}/>
        <div className="main-div bg-[#282828]">

            {/* top navigation for pc and tablets */}
            <div className="dashboard-nav text-blue-700/80">
                <p className="text-green-500 font-semibold text-xl" >Convo</p>
                <div className='flex items-center'>
                    <input onClick={()=>setsearchmodal(true)} 
                    type="text" className="search mr-4 hidden md:block bg-[#282828]" placeholder='search' />
                </div>
            </div>
            {searchmodal &&<Search setsearchmodal={setsearchmodal} />}

            {/* Navigation for mobile phones */}
            <MobileNav setsearchmodal={setsearchmodal}/>

            {/* chats  */}
            <Chats/>
        </div>

        {/* create new chat icon */}
        <div className="fixed bottom-12 right-12 z-10 md:hidden bg-[#1DB954] h-12 w-12 rounded-full flex justify-center items-center">
            <BsChatSquareText className='text-white w-5 h-5' />
        </div>
        <SideNav/>
    </div>
  )
}
