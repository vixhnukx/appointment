import React from 'react'
import './Home.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://max-themes.net/demos/mediz/hospital/upload/slider-hospital-1-1-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className='heading '>
                        Ur<span className='span2'>Fine</span>
                    </h1>
                    
                        <p className='para1'>We are here to help</p>
                        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://max-themes.net/demos/mediz/hospital/upload/slider-hospital-2-1-n.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='heading_2'>29000+
Happy Users</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://max-themes.net/demos/mediz/hospital/upload/slider-hospital-1-1-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 className='heading'>
                        Ur<span className='span2'>Fine</span>
                    </h1>
                    
                        <p className='para1'>We are here to help</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div className='time'>

                <div className='time__1'></div>
                <div className='time__2'>
                    <div className='time__service'>



                        <h3 className='service'><img className='img__time' src='https://max-themes.net/demos/mediz/hospital/upload/Top-icon1.png'></img>Services</h3>
                        <div className='paramain'>
                        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus praesentium nesciunt iure rem, cupiditate modi voluptatem at, et eius molestiae debitis veniam! Rem sapiente ea vitae architecto incidunt nihil quis.</p>
                        </div>
                    </div>
                    <div className='time__time'>

                        <h3 className='service2'><img className='img__time' src='https://max-themes.net/demos/mediz/hospital/upload/Top-icon2.png'></img>Opening Hours</h3>
                        
                      
                        {/* <p className='day_1'>Mon-Fri</p> 
                        
                        <p id='t1'>08:00-22:00</p>
                        
                        <p className='underline'>__________________________________________</p>

                        <p className='day_2'>Sat-Sun</p>  */}

                      {/* <div className='sheduling__section'>
                        <div className='dates'>
                        <p className='day_1'>Mon-Fri</p>
                        <p className='day_2'>Sat-Sun</p>
                        </div>

                        <div className='time'>
                        <p id='t1'>08:00-22:00</p>
                        </div>
                        </div> */}
                        {/* <p className='underline'>__________________________________________</p> */}


                        <div className='day'>
                        <p className='day_1'>Mon-Fri</p>
                        <p className='day_2'>Sat-Sun</p>

                        </div>
                        <div className='tim'>
                        <p id='tim_1'>08:00-22:00</p>
                        <p id='tim_2'>08:00-19:00</p>

                        </div>
                        <div className='undr'>
                        <p className='underline1'>__________________________________________</p>
                        <p className='underline2'>__________________________________________</p>

                        </div>

                    </div>
                </div>
                <div className='time__1'>
                </div>


            </div>
            <div className='mt-5'> <h1 className='our_service'>Our Services</h1>
                <h1 className='our_service1'>Our Services</h1>

                <div className='service_main'>
                    <div className='service_1'>
                        <img className='service_img' src="https://www.booknmeet.com/img/BNM-INDIA-L-H1.svg" alt="" />
                        <h4 className='service_1head'>DOCTOR NEAR ME</h4>
                        <p className=' service_1para'>Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation.</p>
                    </div>
                    <div className='servic2'>
                        <img className='service_img' src="https://www.booknmeet.com/img/BNM-INDIA-L-H2.svg" alt="" />
                        <h4 className='service_1head'>KNOW YOUR DOCTOR</h4>
                        <p className=' service_1para'>Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly.</p>
                    </div>
                    <div className='service_3'>

                        <img className='service_img' src="https://www.booknmeet.com/img/BNM-INDIA-L-H3.svg" alt="" />
                        <h4 className='service_1head'>BOOK CONFIRMED APPOINTMENT</h4>

                        <p className=' service_1para'>Avoid endless back and forth communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling, schedule next consultation with token.</p>
                    </div>
                </div>

            </div>
            <div className='register'>
                <img src="data:image/png;base64,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" alt=""


                />
                <img className='phn' src="https://meditro.themetrades.com/react/static/media/mobile.f82d7322.png" alt="" />
                <div className='girl1'>
                    <img className='girl' src="https://meditro.themetrades.com/react/static/media/women.eb5c49c5.png" alt="" />
                </div>
            </div>
            <div className='main_reg'>
                    <div className='reg'>
                        <h3 className='reg_heading'>Book Now</h3>


                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel tempora sint omnis, dignissimos praesentium id amet necessitatibus provident impedit, quis consectetur iure veniam harum culpa eaque. Atque, corporis nobis!</p>

                        {/* <div className='btn2'>
        <button className='button' type='submit'>varify</button>
        </div> */}
                        <div className='btn3'>
                            <Link to={'/doctors'}>
                                <button className='button' type='submit'>Book Now</button>
                            </Link>
                        </div>


                    </div>
                </div>
                <div>
                  <img className='big' src="https://www.appointy.com/online-booking-software/wp-content/uploads/2020/10/3-step-appointment-scheduling-process-1.svg" alt="" />
                </div>
            
            
    </>
  )
}

export default Home