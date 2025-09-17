import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
export default function ManageContact() {
const[data,setData]=useState("");
useEffect(()=>{
try
{
axios.get(`http://localhost:3000/contactus`).then((res)=>{
setData(res.data);
})

}
catch(error)
{
console.log('error generating',error)
}
},[data]) //dependancy
return (
<>
<Header />
<div className='p-0 w-full flex flex-row'>
<div className='w-65 bg-black p-10'>
<Sidebar />
</div> 
<div className='w-full p-5 mt-12'>
<h1 className='text-3xl ms-1 p-5 mt-10'>Manage Contact Details of customers</h1>
<hr className='border-1 w-55 ms-8' />
<div className='overflow-x-auto mx-5 mt-8'>
<table className='min-w-full bg-white rounded shadow'>
<thead>
<tr>
<th className='py-2 px-4 border-b'>Name</th>
<th className='py-2 px-4 border-b'>Email</th>
<th className='py-2 px-4 border-b'>Phone</th>
<th className='py-2 px-4 border-b'>Subject</th>
<th className='py-2 px-4 border-b'>Message</th>
<th className='py-2 px-4 border-b'>Actions</th>
</tr>
</thead>
<tbody>
{data && data.map((rows)=>{
return (
<>
<tr className='hover:bg-gray-100 text-center'>
<td className='py-2 px-4 border-b'>{rows.name}</td>
<td className='py-2 px-4 border-b'>{rows.email}</td>
<td className='py-2 px-4 border-b'>{rows.phone}</td>
<td className='py-2 px-4 border-b'>{rows.subject}</td>
<td className='py-2 px-4 border-b'>{rows.message}</td>
<td className='py-2 px-4 border-b'>
<button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>Delete</button>
</td>
</tr>
</>
)
})}

</tbody>
</table>
</div>

</div>
</div>

</>
)
}
