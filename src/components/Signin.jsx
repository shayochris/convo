import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
export default function Signin() {
    const {theme,border,ui,isLight} = useContext(ThemeContext);
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
    <div className={`${theme} fixed top-0 left-0 w-full h-full  bg-no-repeat bg-cover`}>
        <div className="w-full">
            <form action="" className="w-[80%] lg:w-[30%] mx-auto p-4 rounded-lg mt-12" onSubmit={handleSubmit} >
                <h2 className="text-xl font-semibold text-green-500">Convo</h2>
                <div className="my-3">
                    <div className="">
                       <input type="text" className={`w-full outline-none border ${border} ${theme} p-2 rounded-lg `} placeholder="username" 
                       />
                       
                    </div>
                    {usernameerror && 
                        <p className="text-xs text-red-500">**{msg}</p>
                    }
                </div>
                <div className="my-3">
                    <div className="relative">
                       <input type="text" className={`w-full outline-none border ${border} ${theme} p-2 rounded-lg `} placeholder="password" 
                       />
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
                         <button className="button w-full bg-green-500">sign in</button>
                     </div> :
                     <div className="my-3">
                        <button className={`button w-full ${isLight ? "bg-[#eee] text-[#333]": "bg-green-500"}`} disabled>
                            sign indfhdh</button>
                    </div>
                }
               
              
            </form>
        </div>
        
    </div>
  )
}
