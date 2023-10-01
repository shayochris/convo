import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signin() {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [usernameerror,setusernameerror]=useState(false);
    const [passworderror,setpassworderror]=useState(false);
    const [msg,setmsg]=useState("");
    const username_status= usernameerror ? "border-red-500":"border-gray-300";
    const password_status= passworderror ? "border-red-500":"border-gray-300";
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username!== "chris"){
            setusernameerror(true);
            setpassworderror(false);
            setmsg("invalid username");
        }else{
            console.log(username);
            setusernameerror(false);
            if(password !== "12345678"){
                setpassworderror(true);
                setusernameerror(false);
                setmsg("invalid password");
            }else{
                console.log(password);
                setpassworderror(false);
                setusernameerror(false);
                setusername("");
                setpassword("");
            }
        }
        
    }
  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-no-repeat bg-cover">
        <div className="w-full">
            <form action="" className="w-[80%] lg:w-[30%] mx-auto bg-white p-4 rounded-lg mt-12" onSubmit={handleSubmit} >
                <h2 className="text-xl font-semibold text-blue-700">Convo</h2>
                <div className="my-3">
                    <div className="relative">
                        <input type="text"  className={`block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900   border-[2px] ${username_status} appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" "
                        value={username} onChange={(e)=>setusername(e.target.value)} required
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">username</label>
                    </div>
                    {usernameerror && 
                        <p className="text-xs text-red-500">**{msg}</p>
                    }
                </div>
                <div className="my-3">
                    <div className="relative">
                        <input type="password"  className={`block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900   border-[2px] ${password_status} appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" "
                        value={password} onChange={(e)=>setpassword(e.target.value)} required
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">password</label>
                    </div>
                    {passworderror && 
                        <p className="text-xs text-red-500">**{msg}</p>
                    }
                </div>
                <div className="my-1">
                    <Link className="text-sm text-blue-600">forgot password?</Link>
                </div>
                {username && password ?
                    <div className="my-3">
                         <button className="button w-full bg-blue-700">sign in</button>
                     </div> :
                     <div className="my-3">
                        <button className="button w-full bg-blue-500/40" disabled>sign in</button>
                    </div>
                }
               
                <fieldset className=" border-t-2 border-gray-200 text-center">
                    <legend className="p-2">OR</legend>
                </fieldset>
                <div className="my-3">
                    <Link to="/signup" className="button bg-green-500 w-full block text-center text-sm">Sign Up</Link>
                </div>
            </form>
        </div>
        
    </div>
  )
}
