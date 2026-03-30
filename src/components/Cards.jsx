// import { cardItems } from '@/lib/carDetails';
import { cardItems } from '@/lib/cardItems';
import React from 'react'
import { IoShieldOutline } from "react-icons/io5";


export default function Cards() {
 

    return (
        <>
            {
                cardItems.map((item) => (
                    <div key={item.id} className='border  space-y-1 border-gray-400 hover:border-[#1a5b4b] rounded-md p-5 bg-[#15181f] w-full '>
                        <div className=" flex  justify-between text-white">
                            <p>{item.toptext}</p>
                           <span style={{color: item.middleTextColor}}> <IoShieldOutline /></span> 
                        </div>
                        <h3 style={{color: item.middleTextColor}} className={`text-${item.middleTextColor} flex items-center text-2xl`}>{item.middletext} <sub className='text-[8px] text-gray-600 '> {item.subscriptText}</sub></h3>
                        <p className='text-gray-600 text-sm font-'>{item.bottomtext}</p>
                    </div>
                ))
            }
        </>
    )

}
