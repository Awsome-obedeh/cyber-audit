"use client"
import Image from "next/image";
import { FaGlobe } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { useState } from "react";

export default function Home() {

  


  const [placeHolderText, setPlaceHolderText]=useState('https://example.com')

  const handlePlaceHolder=(text)=>{
    setPlaceHolderText(text)
    console.log(placeHolderText)
  }
  return (
    <main className="bg-black/75 mt-4 flex flex-col w-full gap-5">

      <div>

        <h2 className="text-lg text-white ">Dashboard</h2>
        <p className="text-[10px] text-gray-400 ">Monitor security posture, performance metrics, and databse health</p>
      </div>

      <div className="border-gray-100 bg-[#15181f] h-40 px-5 py-5 border">
        <h4 className="text-white text-md font-semibold ">New Scan</h4>

        <div className="flex gap-2 items-center mt-5">
          <div onClick={()=>handlePlaceHolder('http:/example.com')} className="flex items-center gap-2 hover:bg-gray-500 hover:text-white hover:rounded-md p-1 text-white/50">
            <span className="text-white text-[8px]"><FaGlobe /></span>
            <p className="text-[10px] "> Website </p>

          </div>
          <div onClick={()=> handlePlaceHolder("http://exampme/api.com/v1")} className="flex text-white/50 items-center gap-2 hover:bg-gray-500 hover:text-white hover:rounded-md p-1">
            <span className="text-white text-[8px]"><FaServer /></span>
            <p className="text-[10px] "> API Endpoint </p>

          </div>
          <div  onClick={()=> handlePlaceHolder("postgres:user:obed;pass:5873/db")} className="flex text-white/50 items-center gap-2 hover:bg-gray-500 hover:text-white hover:rounded-md p-1">
            <span className="text-white text-[8px]"><FaDatabase /> </span>
            <p className="text-[10px] "> Database </p>

          </div>


        </div >
          <div className="mt-4 w-full h-7  rounded-md ">
            <input placeholder={placeHolderText} type="search" className="  px-4 items-center placeholder-gray-300 placeholder:text-[10px] w-[80%] h-full bg-[#1b1e27] outline-none border-0 outline-[#1a5b4b] text-white text-[10px]" />
          

            <button className="w-[10%] h-full  bg-[#1a5b4b] rounded-md mx-3 text-[10px]">Submit</button>
          </div>
      </div>
    </main>

   
  );
}
