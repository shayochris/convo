
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';
import SideNav from './shared/SideNav';
import {BiArrowBack} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';

export default function Chat() {
  const navigate=useNavigate();
  const [msgbox,setmsgbox]=useState(false);
  const [mssg,setmssg]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    setmssg("");
    setmsgbox(false);
  }
  return (
    <div className="w-full h-screen flex bg-[#413d3d]">
      <SideNav/>
      {msgbox &&
      <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-20">
        <div className='w-full h-full flex justify-center '>
          <form action="" className='mt-12 w-[80%] mx-auto' onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">write message</h2>
              <AiOutlineClose onClick={()=>setmsgbox(false)} className='w-5 h-5'/>
            </div>
            
            <textarea name="" id="" cols="30" rows="2" className="input" placeholder='message' autoFocus
            value={mssg} onChange={(e)=>setmssg(e.target.value)}
            ></textarea>
            {mssg &&
            <div className="mt-1">
              <button className="button bg-blue-500">send</button>
            </div>
            }
          </form>
        </div>
      </div>
      }
      <div className="main-div h-full overflow-y-scroll scrollbar-hide">
        <div className="sticky h-[8%] sm:h-auto z-10 top-0 left-0 w-full p-2 bg-[#282828] text-[#FFFFFF] border-b border-[#404040]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                <BiArrowBack onClick={()=>navigate(-1)} className='md:hidden mr-4 w-6 h-6'/>
                <div className="avatar w-10 h-10"></div>
              </div>
                
                <div>
                  <p className='text-sm font-semibold'>username</p>
                  <p className='text-xs'>email@gmail.com</p>
                </div>
            </div>
            <BsThreeDotsVertical className='w-6 h-6'/>
          </div>
         
        </div>

        <div className="p-2 h-[84%] sm:h-full bg-[#282828] overflow-y-scroll scrollbar-hide">
        {[...Array(6)].map((n)=>(
          <div key={n}>
             <div className='my-3 flex justify-start text-sm '>
            <div className='max-w-[80%] lg:max-w-[60%] ml-2'>
              <div className="relative bg-[#404040] text-[#FFFFFF]  p-2 rounded-lg">
                <p>Lorem ipsum </p>
              </div>
              <div className='flex items-center text-gray-500'>
                <p className='text-xs'>21:35</p>
                <BsDot className='w-4 h-4'/>
                <p className='text-xs'>delivered</p>
              </div>
            </div>
             </div>
             <div className='my-3 flex justify-end text-sm '>
                  <div className='max-w-[80%] lg:max-w-[60%] ml-2'>
                    <div className="relative bg-[#1DB954] text-white  p-2 rounded-lg">
                      <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='flex items-center text-gray-500'>
                      <p className='text-xs'>21:35</p>
                      <BsDot className='w-4 h-4'/>
                      <p className='text-xs'>delivered</p>
                    </div>
                  </div>
             </div>
          </div>
        ))}
        </div>
        <div className="sticky h-[8%] sm:h-auto bottom-0 left-0 w-full p-2 bg-[#282828] z-10 border-t-[1px] border-[#404040] text-[#FFFFFF]">
          <form action="" className="w-full">
            <input type="text" className=" input hidden md:block bg-[#282828]" placeholder='write message' autoFocus/>
            <input onClick={()=>setmsgbox(true)} type="text" className=" input md:hidden bg-[#282828]" placeholder='write message'/>
          </form>
        </div>
      </div>
      <SideNav/>
    </div>
  )
}
