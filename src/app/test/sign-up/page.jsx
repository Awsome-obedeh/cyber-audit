"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function TestRegisterPage() {
  const router=useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const handleOnChange = (e) => {

    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(formData)

    // send to api
    try {

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/sign-up`, formData)
      const data = res.data
  
      if (res.status === 201) {
        setLoading(false)
        
        console.log(data)
        // route the user to login page
        router.push('sign-in')
      }

    }
    catch (err) {
  
      console.error("SIGN UP ERROR :", err)
      setLoading(false)
      const message = err.response?.data?.message || "somethin went wrong"
      const status = err.response?.status
      if (status == 400) {
        setError(message)
      }

      else if (status == 500) {
        setError(message)
      }
      setError(message)
      // console.log(data)
    }


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

        {
          error && <p className='text-white bg-pink-400'>{error}</p>
        }
        <div className='my-3'>

          <input onChange={handleOnChange} className='ring-2 ring-gray-400 px-3' type="text" placeholder="Username" name="username" />
        </div>

        <div className='my-3'>

          <input onChange={handleOnChange} className='ring-2 ring-gray-400 px-3' type="email" placeholder="Email" name="email" />
        </div>

        <div className='my-3'>
          <input type="radio" value="male" name="" id="" />

          <input onChange={handleOnChange} className='ring-2 ring-gray-400 px-3' type="password" placeholder="Password" name="password" />
        </div>

        <button disabled={loading} className={`${loading ? 'bg-gray-500' : 'bg-green-500'} text-white px-5 py-3`} type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <Link href="/test/sign-in">Already have an account? Sign In</Link>
    </div>
  )
}
