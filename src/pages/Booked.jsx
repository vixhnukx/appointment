import React from 'react'


import './Booked.css'
import Time from './Time'
function Booked() {
  return (
    <>

    <div className='book_main'>

        <div className='book_head'>
            <h4 className='text-center'>schedule</h4>
        </div>
        <div className='book_text'>
           <p className='text_para'> your assigned time :  </p><h6 className='book_time'>11:00am-12:00pm</h6></div>
           <Time></Time>
    </div>



    


    </>
  )
}

export default Booked