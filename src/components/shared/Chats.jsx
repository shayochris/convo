import { Link } from "react-router-dom";
import bgimage from "../../assets/images/bgimage.jpg";
export default function Chats() {
  return (
    <div className='p-4 bg-[#282828]'>
    {[...Array(20)].map((n,i)=>(
         <div key={i} className='p-2 text-white bg-[#404040] my-2 rounded-lg'>
            <Link to="/chat/1">
            <div className="flex">
                <div className=''>
                    <div className="w-12 h-12 avatar">
                        <img src={bgimage} alt="" className="avatar-img" />
                    </div>
                </div>
                
                <div className='ml-3 w-[80%] pb-1'>
                    <div className='flex justify-between items-center'>
                        <p className="font-semibold">james</p>
                        <p className='text-xs text-green-400'>21:35</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='text-sm'>  totam! Architecto non aliquam ..</p>
                        <div className=" px-2 bg-green-500 rounded-full flex items-center justify-center">
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
