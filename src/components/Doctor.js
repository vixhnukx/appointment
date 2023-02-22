import React, { useState,useEffect } from 'react'
import { Row } from 'react-bootstrap'
import './Doctor.css'
import DoctorCard from './DoctorCard'
import Filter from './Filter'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
// import { useParams } from 'react-router-dom';


function Doctor() {
  // const params=useParams() 
    
    const [alldoctors,setalldoctors]=useState([])

     // function to api call for datas inside json file

     const doctorsdata=async ()=>{
      await fetch(' /restaurants.json').then(data=>{data.json().then(result=>{
        // console.log(result);
        setalldoctors(result.restaurants)
      }) 
    })
     }
     
    //  const docData= alldoctors.find(Item=>Item.id==params.location)
    //  console.log(alldoctors)
     useEffect(()=>{
        doctorsdata()
},[])



  return (

   
    <>
    
         <Dropdown className='location'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Location
      </Dropdown.Toggle>

      <Dropdown.Menu>

        
      <Dropdown.Item > </Dropdown.Item>
 




      </Dropdown.Menu>
    </Dropdown>   
     
    
    <Row>

        
        {
            alldoctors.map(item=>(
               
                <DoctorCard data={item}/>
                
            ))
        }
        </Row>
    </>
  )
}

export default Doctor