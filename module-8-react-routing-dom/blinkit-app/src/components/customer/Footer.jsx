import React from 'react'

export default function Footer() {
  return (
    <>
        <section id='footer' className='p-16 mt-10 bg-black flex flex-row'>

        <div className='w-full text-white'>
          <ul className='p-5'>
            <li><a href='' className='text-3xl'>Page Links </a></li>
            <li><a href=''>Vegetables</a></li>
            <li><a href=''>Fruits</a></li>
            <li><a href=''>Dry Fruits</a></li>
            <li><a href=''>Account</a></li>
            <li><a href=''>Contact Us</a></li>
            <li><a href=''>fAQ</a></li>
            <li><a href=''>Terms & Conditions</a></li>
          </ul>
        </div>

        <div className='w-full text-white'>
          <ul className='p-5'>
            <li><a href='' className='text-3xl'>Our Address </a></li>
            <li><a href=''>Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India, and their registered office address is 1042/2, VISTAR COLONY, MAKNPUR INDIRAPURAM, Ghaziabad, Uttar Pradesh, India - 201012</a></li>
    
          </ul>
        </div>

        <div className='w-full text-white'>
          <ul className='p-5'>
            <li><a href='' className='text-3xl'>Subscribe NewsLetter </a></li>
            <li><a href=''><input type='text' placeholder='subscribe newsletter *' className='p-2 w-full mt-2 bg-white text-black' /></a></li>
            <li><a href=''>Terms & Conditions</a></li>
          </ul>
        </div>
        </section>
    </>
  )
}
