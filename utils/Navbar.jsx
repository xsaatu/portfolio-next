"use client";
import Image from "next/image"
import Link from "next/link";
import {useState} from "react";


export default function Navbar() {
    const Menus = [
        {name:"Home", icon:"home-outline", dis:"translate-x-0", link:"home"}, 
        {name:"About", icon:"person-outline", dis:"translate-x-32", link:"about"},
        {name:"Portfolio", icon:"briefcase-outline", dis:"translate-x-48", link:"portfolio"},
    ]

    const [active, setActive] = useState(0);

    return(
        
        <div className="drawer lg:drawer-open justify-end fixed z-50 scroll-smooth">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:hidden">
                <div className="btm-nav">
                    <ul className="grid grid-cols-3 relative">
                        {
                            Menus.map((menu, i) => (
                                <li key={i} className="w-20 -h-5 ">
                                    <Link href={`#${menu.link}`} className="flex flex-col text-center items-center pt-6" onClick={() => setActive(i)}>
                                        <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-10'}`}>
                                            <ion-icon name={menu.icon}></ion-icon>
                                        </span>
                                        <span className={` ${active === i ? 'translate-y-2 duration-700 opacity-100' : 'opacity-0 translate-y-10'} `}>{menu.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div> 
            <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="grid grid-rows-3 p-2 w-25 h-full bg-white bg-opacity-50 text-base-content shadow-lg">
                <li className="mt-6">
                    <Link href="#home" className="absolute ml-2">
                        <img src="/img/icon/home-outline.svg" className="flex w-8  ml-2"/>
                        <div>
                            <div className="flex items-center pr-1 ">Home</div>
                        </div>
                        </Link>
                </li>
                <li className="-mt-20">
                    <Link href="#about" className="absolute ml-2 -t-5">
                        <img src="/img/icon/person-outline.svg" className="w-8 ml-2" />
                        <div className="flex items-center pr-1 ">About</div>
                    </Link>
                </li>
                <li className="-mt-44">
                    <Link href="#portfolio">
                        <img src="/img/icon/briefcase-outline.svg" className="w-8 ml-4" />
                        <div className="flex items-center pr-2 ">Portfolio</div>
                    </Link>
                </li>
                <li>
                    <Link href=""></Link>
                </li>
            </ul>
            
            </div>
        </div>
    )
}