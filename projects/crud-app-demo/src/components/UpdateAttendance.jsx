import React,{useState,useRef,useEffect} from 'react'
import { Container,Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function UpdateAttendance() {
 //descrtcutured data 
 const[data,setData]=useState("");
 const{id}=useParams();
 const navigate=useNavigate();
//  initialised each input data 
const studentname=useRef();
const attdate=useRef();
const[getAttendance,setGetAttendance]=useState("present");
// const [getAttendance,setGetAttendance]=useState("present");
// create a function for edit data
useEffect(()=>{
 // edit data  //
 axios.get(`http://localhost:4000/attendance/${id}`).then((response)=>{
    setData(response.data);
    // set each current values in input
    studentname.current.value=response.data.studentname;
    attdate.current.value=response.data.attdate;
    
    if (response.data.getAttendance === "present") {
        setGetAttendance("present");
        // Set absent radio unchecked if you have separate refs
    } else if (response.data.getAttendance === "absent") {
        setGetAttendance("absent")
        // Set present radio unchecked if you have separate refs
    }
 }) 
},[id]);

// create a eventHandeling function for update data
const upAttendnaceFormData=(e)=>{
 e.preventDefault();
    var upd={
        studentname:studentname.current.value,
        attdate:attdate.current.value,
        getAttendance:getAttendance
    } 
    //stored via axios 
    try 
    {
        axios.put(`http://localhost:4000/attendance/${id}`,upd).then(()=>{
            Swal.fire({
                title: "Good job!",
                text: "Your Attendance updated successfully!",
                icon: "success"
            });     
           
            // e.target.reset();
             navigate('/');
             window.location.href();
            setGetAttendance("present"); // reset attendance status
           
        })
    }
    catch(error)
    {
        console.log('error generating while add attendnace',error);
    }
}
  
  return (
     <Container className='p-5 w-75 mx-auto mt-5'>
            <Row>
                <div className='col-md-5'>
                    <img src='https://images.tristatetechnology.com/blog-images/uploads/2023/10/why-choose-react-for-front-end-dev.jpg' alt='routing-app' className='' style={{width:"100%", marginTop:"20%"}} />
                </div>
                <div className='col-md-6 ms-5'>
                    <h1 className='fs-5'>Edit Attendance</h1>
                    <hr className='w-25' />
                    <form>
                        <fieldset className='border border-2 border-secondary p-5'>
                            <legend align='left'>Edit Attendance</legend>
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
                                    value="present" 
                                    checked={getAttendance === "absent"}
                                    onChange={() => setGetAttendance("absent")}
                                />
                                </div>
                            <div className='mt-2 w-75'>
                                <button type="button" onClick={upAttendnaceFormData} className='btn btn-lg btn-dark text-white'>Update Attendance</button> 
                            </div>
                        </fieldset>
                    </form>
                </div>
                </Row>
                </Container>
  )
}
