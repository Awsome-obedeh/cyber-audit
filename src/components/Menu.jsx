"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa"
// import { IoShieldOutline } from "react-icons/io5";
import { IoShieldOutline } from "react-icons/io5";
import { MdShield } from "react-icons/md";

export default function Menu() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const links = [
        {
            id: 1,
            title: "New Scan",
            url: '/newscan',
            icons: "/globe.svg"

        },
        {
            id: 2,
            title: "Security",
            url: '/security',
            icons: "/file.svg"

        },
        {
            id: 3,
            title: "performance",
            url: '/performance',
            icons: "/file.svg"

        },
        {
            id: 4,
            title: "Database",
            url: '/database',
            icons: "/file.svg"

        },
        {
            id: 5,
            title: "report",
            url: '/report',
            icons: "/file.svg"

        },
        {
            id:6 ,
            title: "settings",
            url: '/settings',
            icons: "/file.svg"

        },


    ]

    const handleNavOpen = () => {
        // setIsNavOpen(!isNavOpen)
        setIsNavOpen(prev => !prev)
    }
    return (
        <div className={`${isNavOpen ? 'w-full' : 'w-20 '} h-full bg-slate-800 border-r transition-all transition-duration-1500 fade-in`}>
            <div className='flex justify-between px-4 pt-4  items-center'>
                <div className='flex gap-2'>

                    <span className=' px-2 bg-emerald-800 py-2 rounded-3xl text-emerald-400'><IoShieldOutline /></span>
                    {isNavOpen && <Link className='flex gap-2 items-center font-bold' href="/"> CyberAudit   </Link>}
                </div>


                <span onClick={handleNavOpen} className='text-sm'><FaChevronLeft /> </span>
            </div>

            {
                links.map(link => (
                    <div key={link.id} className='flex gap-3 px-4 mt-6'>

                        <Image src={link.icons} width={40} height={40} alt={link.title} className='w-5 h-5 object-fit'></Image>
                        {
                            isNavOpen && <Link className='font-base capitalize' href={link.url}> {link.title}</Link>
                        }

                    </div>
                ))
            }
        </div>
    )
}
