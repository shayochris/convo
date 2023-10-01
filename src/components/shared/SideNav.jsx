import { Link } from 'react-router-dom'
import {BsChatSquareTextFill} from "react-icons/bs";
import {AiFillSetting} from "react-icons/ai";
import {HiUsers} from "react-icons/hi";
import {MdLogout} from 'react-icons/md';
import bgimage from '../../assets/images/bgimage.jpg';
export default function SideNav() {
  return (
    <div className="sidenav">
        <div className="w-full bg-blue-600/80 p-4">
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
                <Link className="sidenav-link"><BsChatSquareTextFill className='mr-2 w-5 h-5'/>chats</Link>
            </li>
            <li>
                <Link className="sidenav-link"><AiFillSetting className='mr-2 w-5 h-5'/>Settings</Link>
            </li>
            <li>
                <Link className="sidenav-link"><HiUsers className='mr-2 w-5 h-5'/>Contacts</Link>
            </li>
            <li>
                <Link className="sidenav-link"><MdLogout className='mr-2 w-5 h-5'/>Logout</Link>
            </li>
        </ul>
    </div>
  )
}