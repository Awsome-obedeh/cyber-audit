"use client"
import Loder from '@/components/Loder'
import React, { useEffect, useState } from 'react'


export default function TestPage() {
    const [loading, setLoading]=useState(false)
    const [greet, setGreet]=useState('')

    const getData=async()=>{
        setLoading(true)
        const res=await fetch('/api/greet')
        // convert API response from json to object
        const resData=await res.json()
        console.log(res)
        setGreet(resData)
        console.log(resData)
        if(res.ok){

            console.log("THIS IS THE USE SSTATE DATA:", greet)
          }
          setLoading(false)
    }

    // getData()
    useEffect(()=>{
        getData()
    }, [])
   
  return (
    <div>
      {
        loading ? <Loder/> : 
        (<h1 className='text-3xl font-bold text-center mt-10'>Data Fetched Successfully 
        {JSON.stringify(greet)}</h1>)
      }
    </div>
  )
}
