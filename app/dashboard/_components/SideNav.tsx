"use client"
import { HistoryIcon, Home, icons, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

    const MenuItems = [
        {
            name:"Home",
            icon:Home,
            path: "/dashboard"
        },
        {
            name:"History",
            icon:HistoryIcon,
            path: "/dashboard/history"
        },
        {
            name:"Billing",
            icon:WalletCards,
            path: "/dashboard/billing"
        },
        {
            name:"Settings",
            icon:Settings,
            path: "/dashboard/settings"
        },

    ]

    const path = usePathname()

    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='h-screen shadow-lg border bg-white '>
        <div className='flex justify-center items-center gap-2 mt-2 border-b p-1'>
            <div className="img">
                <Image src ={'/logo.svg'} alt="logo" width={50} height={40}/>
            </div>
            <div className="name">
                <h1><b>CodeGen</b></h1>
            </div>
        </div>
        <div className="men mt-5 p-2">
            {MenuItems.map((menu,index)=>(
                <div className={`flex gap-2 items-center mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==menu.path&&"bg-primary text-white"}`}>
                    <menu.icon/>
                    <h2><b>{menu.name}</b></h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav
