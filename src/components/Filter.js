import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Filter() {

const params=useParams()
// console.log(params.id);



    
  const [alldoctors,setalldoctors]=useState([])

   // function to api call for datas inside json file

   const doctorsdata=async ()=>{
    await fetch(' /restaurants.json').then(data=>{data.json().then(result=>{
      // console.log(result);
      setalldoctors(result.restaurants)
    }) 
  })
   }

  //  console.log(alldoctors);
 const docData= alldoctors.find(Item=>Item.id==params.id)
//  console.log(docData);
   useEffect(()=>{
      doctorsdata()
},[])





  return (


    <>
    
        
    
{

  docData?(


<Row>
    <Col>
  <Image className='p-5' src={docData.photograph}/>
  </Col>
  <Col className='mt-5'>
  <h1> Dr: {docData.name}</h1>
  <h3>specialized:{docData.category}</h3>
  <h5>Location: {docData.location}</h5><br></br>
  
  <h5>schedule your appoinment:<Link to={'/login'}><Button>schedule</Button></Link></h5>
  
  
  
  </Col>
</Row>

  ):'null'
}




    </>
    
  )
  }


export default Filter