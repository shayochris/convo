import { Link } from "react-router-dom";
import bgimage from "../../assets/images/bgimage.jpg";
export default function Chats() {
  return (
    <div className='p-4'>
    {[...Array(20)].map((n,i)=>(
         <div key={i} className='bg-white p-2'>
            <Link to="/chat/1">
            <div className="flex">
                <div className=''>
                    <div className="w-12 h-12 avatar">
                        <img src={bgimage} alt="" className="avatar-img" />
                    </div>
                </div>
                
                <div className='ml-3 w-[80%] border-b-[1px] border-gray-200 pb-1'>
                    <div className='flex justify-between items-center'>
                        <p className="font-semibold">username</p>
                        <p className='text-xs text-gray-400'>21:35</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='text-gray-600 text-sm'>  totam! Architecto non aliquam ..</p>
                        <div className=" px-2 bg-blue-600 rounded-full flex items-center justify-center">
                            <p className='text-white text-sm '>5</p>
                        </div>
                    </div>
                   
                </div>
            </div>  
            </Link>
        </div>
    ))}
   
</div>
  )
}
