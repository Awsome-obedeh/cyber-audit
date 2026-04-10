"use client"
import axios from 'axios'
import React, { useState } from 'react'

export default function TestRegisterPage() {
    const [formData, setFormData]=useState({
        username: '',
        email: '',
        password: ''
    })

    const handleOnChange=(e)=>{
        const {name, value}=e.target
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))

    }


    const handleSubmit=async (e)=>{
        e.preventDefault()
        console.log(formData)

        // send to api
        const res= await axios.post('/api/sign-in', formData)
        const data=res.data
        console.log(data)

        // const response=await fetch('/api/sign-up',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        // const data=await response.json()

    }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='my-3'>

        <input onChange={handleOnChange} className='ring-2 ring-gray-400 px-3' type="text" placeholder="Username" name="username"  />
        </div>

        <div className='my-3'>

        <input onChange={handleOnChange} className='ring-2 ring-gray-400 px-3' type="email" placeholder="Email" name="email"  />
        </div>

        <div className='my-3'>

        <input onChange={handleOnChange} className='ring-2 ring-gray-400 px-3' type="password" placeholder="Password" name="password" />
        </div>

        <button className='bg-green-500 text-white px-5 py-3' type="submit">Sign Up</button>
      </form>
    </div>
  )
}
