import React,{useState} from 'react'
// import Drhome,{id} from "../../Sections/DrHome/Drhome"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const sidebardata=[
    
    {
        title:"My Info",
        path:"/myinfo/"+2,
        cName:'nav-text'
    },
    {
        title:"My Keys",
        path:"/mykeys",
        cName:'nav-text'
    },
    {
        title:"Settings",
        path:"/settings",
        cName:'nav-text'
    },
    {
        title:"Logout",
        path:"/",
        cName:'nav-text'
    }
]

export {sidebardata};