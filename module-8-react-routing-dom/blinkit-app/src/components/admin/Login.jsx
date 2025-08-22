import React from 'react'

export default function Login() {
  return (
   <>
     <div className='w-3/4 bg-white shadow mx-auto mt-10 p-2'>
      <h1 className='text-center text-6xl font-mono animate-pulse'>Admin Login</h1>
      <hr className='border-1 w-25 mx-auto' />
      <div className='flex flex-row mt-0 p-10'>
        <div className='w-1/2'>
            <img src='https://cdn.goodmanlantern.com/wp-content/uploads/2022/04/Group-6631.svg' alt='admin' className='w-128' />
        </div>
        <div className='w-1/2'>
            <form>
                <div className='form-group mt-20'>
                    <input type='text' placeholder='Email *' className='form-control w-full p-4 border-1' />
                </div>
                <div className='form-group mt-5'>
                    <input type='text' placeholder='Email *' className='form-control w-full p-4 border-1' />
                </div>
                <div className='form-group mt-5'>
                    <input type='submit'  className='form-control w-full p-4 border-1 bg-black text-white text-2xl font-mono animate-pulse' value="Login" />
                </div>
            </form>
        </div>
      </div>
      </div>
   </>
  )
}
