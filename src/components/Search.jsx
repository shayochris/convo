import { useState } from "react"

export default function Search({ setsearchmodal }) {
    const [term,setTerm]=useState("");
    const [result,setResult]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-white flex justify-center z-20'>
        <div 
        className="w-full md:w-[40%] lg:w-[40%] mx-auto md:border-[1px] 
        md:border-gray-200 h-full md:max-h-[500px] md:mt-4 md:rounded-lg md:shadow-lg overflow-y-scroll">
            <div className="flex border-b-[1px] border-gray-200 p-2 sticky top-0 left-0 bg-white">
                <button onClick={()=>setsearchmodal(false)}>back</button>
                <form action="" onSubmit={handleSubmit} className="ml-4 w-full text-gray-700 flex justify-between items-center">
                    <input type="text" className="outline-none w-full " placeholder="search" autoFocus 
                    value={term} onChange={(e)=>setTerm(e.target.value)}
                    />
                    {term&&
                        <button onClick={()=>setResult(true)} className="text-blue-600 ">search</button>
                    }
                </form>
            </div>
            <div className="mt-2">
            {result && [1,2,3,4,5].map((n)=>(
                     <div key={n} className='bg-white p-2'>
                        <div className="flex">
                            <div className=''>
                                <div className="w-12 h-12 avatar"></div>
                            </div>
                            
                            <div className='ml-3 w-[80%] pb-1'>
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
    </div>
  )
}
