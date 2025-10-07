import React,{useRef, useState, useEffect} from 'react'
import { Container,Row } from 'react-bootstrap'
import { Chart } from "react-google-charts";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function Home() {
//google pie chart    // 
const data = [
["Attendance", "Daily"],
["present", 9],
["absent", 2],

];
const options = {
title: "My Daily Activities",
};
//display attendnace data in list 
const[att,setAtt]=useState("");
useEffect(()=>{
axios.get(`http://localhost:4000/attendance`).then((res)=>{
try{
setAtt(res.data);
}
catch(error)
{
console.log('error generated',error);   
}
})
},[])
// stored data or attendnace
const studentname=useRef("");
const attdate=useRef("");
const [getAttendance, setGetAttendance] = useState("present");
const navigate=useNavigate();
// create a formHandeling Function 
const addAttendnaceFormData=async(e)=>{
e.preventDefault();
var insert={
studentname:studentname.current.value,
attdate:attdate.current.value,
getAttendance:getAttendance
} 
//stored via axios 
try 
{
axios.post(`http://localhost:4000/attendance`,insert).then(()=>{
Swal.fire({
title: "Good job!",
text: "Your Attendance added successfully!",
icon: "success"
});     

e.target.reset();
setGetAttendance("present"); // reset attendance status
navigate('/');
})
}
catch(error)
{
console.log('error generating while add attendnace',error);
}
}
return(
<>
<Container fluid className='p-5 w-100 mx-auto mt-5'>
<Row>
<div className='col-md-6'>
<Chart
chartType="PieChart"
data={data}
options={options}
width={"650px"}
height={"400px"}
/>
</div>
<div className='col-md-5 ms-5'>
<h1 className='fs-5'>CRUD app (create | Read | update | delete)</h1>
<hr className='w-25' />
<form onSubmit={addAttendnaceFormData}>
<fieldset className='border border-2 border-secondary p-5'>
<legend align='left'>Add Attendance</legend>
<div className='mt-2 w-75'>
<select ref={studentname} className='form-control border border-1 border-dark'>
<option value="">-select students-</option>
<option value="avtar">Avtar</option>
<option value="paras">Paras</option>
<option value="kartik">Kartik</option>
<option value="raj">Raj</option>
<option value="vijay">Vijay</option>
<option value="amit">Amit</option>
<option value="alpesh">Alpesh</option>
<option value="bhoomi">Bhoomi</option>
</select>    
</div> 
<div className='mt-2 w-75 border border-1 border-dark'>
<input type='date' ref={attdate} placeholder='Enter date' className='form-control' />
</div>
<div className='mt-2 w-75'>
<br />
<label className='fs-5'>Tick attendance</label>
<br />

Present :
<input
type='radio'
name='att'
value="present" 
checked={getAttendance === "present"}
onChange={() => setGetAttendance("present")}
/>
Absent :
<input
type='radio'
name='att'
value="absent" 
checked={getAttendance === "absent"}
onChange={() => setGetAttendance("absent")}
/>
</div>
<div className='mt-2 w-75'>
<input type='submit' value="Add Attendance" className='btn btn-lg btn-dark text-white' /> 
</div>
</fieldset>
</form>
</div>
{/* display attendance */}
<div className='mt-5 w-75 mx-auto'>
<h2 className='fs-5 mb-3'>Attendance Records</h2>
<table className='table table-responsive'>
<thead>
<tr>
<th>#</th>
<th>Student</th>
<th>Date</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{att && att.map((rows) => {
return (
<tr key={rows.id}>
<td>{att.indexOf(rows) + 1}</td>
<td>{rows.studentname}</td>
<td>{rows.attdate}</td>
<td>{rows.getAttendance}</td>
<td>

<button className='btn btn-warning text-dark fs-5'><span className='bi bi-eye'></span></button>
| 
<button type='button' onClick={()=>navigate(`/edit-data/${rows.id}`)} className='btn btn-primary text-white fs-5'><span className='bi bi-pencil'></span></button> 
| 
<button type='button' onClick={()=>navigate(`/${rows.id}`)} className='btn btn-danger text-white fs-5'><span className='bi bi-trash'></span></button>

</td>
</tr>
)
})}
</tbody>
</table>
</div>
</Row>
</Container>
</>
)

}

