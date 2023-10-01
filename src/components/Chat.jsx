
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';
import SideNav from './shared/SideNav';
import {BiArrowBack} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export default function Chat() {
  const navigate=useNavigate();
  return (
    <div className="w-full h-screen flex">
      <SideNav/>
      <div className="main-div">
        <div className="sticky z-10 top-0 left-0 w-full p-2 bg-blue-600 md:bg-white text-white md:text-gray-700 md:border-b-[1px] md:border-gray-300">
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

        <div className="p-2 h-full overflow-y-scroll">
        {[...Array(1)].map((n)=>(
          <div key={n}>
             <div className='my-3 flex justify-start text-sm '>
            <div className='max-w-[80%] lg:max-w-[60%] ml-2'>
              <div className="relative bg-gray-100 text-gray-700  p-2 rounded-lg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a laudantium quasi?</p>
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
                    <div className="relative bg-blue-500 text-white  p-2 rounded-lg">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a laudantium quasi?</p>
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
        <div className="sticky bottom-0 left-0 w-full p-2 bg-white z-10 border-t-[1px] border-gray-300">
          <form action="" className="w-full">
            <input type="text" className=" w-full outline-none" placeholder='write message' autoFocus/>
          </form>
        </div>
      </div>
    </div>
  )
}
