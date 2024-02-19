import React from 'react'
import { Row , Col, Container, Navbar } from 'react-bootstrap'


function Footer() {
  return (
    <div className='header'  style={{fontFamily:'Playfair Display'}}>
     <hr />
     <Container className='p-3  text-white'>
       <Row className='w-100 container'>
        <Col lg={3} md={3} >
        <Navbar className="bg-body-black ">
        <Container>
          <Navbar.Brand href="#home">
            <i class="fa-solid fa-circle-play" style={{color: "red"}}></i>
        <span className='fw-bolder'style={{color:"red"}}> V</span><span className='text-black fw-bolder'>ideo</span> <span  className='fw-bolder' style={{color:"red"}} >U</span><span className='text-black fw-bolder'>ploader</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <p className='text-black text-left  fw-bolder'>Designed and built with all the love in the world by the bootstrap team possimus recuusandae consequator ipsa verotatis </p>
        </Col>



        <Col lg={3} md={3} style={{fontFamily:'Playfair Display'}}>
        <h4 className='text-black fw-bolder' >Link</h4>
        <a href="" className='text-danger fw-bolder fs-5' style={{textDecoration:'none'}} >Landing Page</a><br />
        <a href="" className='text-danger fw-bolder  fs-5' style={{textDecoration:'none'}}>Home</a><br />
        <a href="" className='text-danger  fw-bolder  fs-5' style={{textDecoration:'none'}}>Watch History</a><br />
        </Col>


        <Col lg={3} md={3}>
        <h4 className='fw-bolder text-black'>Guides</h4>
        <h5  className='text-danger fw-bolder' >react</h5>
        <h5  className='text-danger fw-bolder'>react bootstrap</h5>
        <h5  className='text-danger fw-bolder'>routing</h5>
        </Col>


        <Col lg={3} md={3}>
        <h4 className='text-black fw-bolder'>Contact Us</h4>
        <input className='w-100 p-1' type="text" name="" id="" placeholder='enter email' /><br /><br />
        <button className='bg-danger text-white w-100 p-1'>Send</button>
        <div >
          <i style={{ marginLeft: '3rem' }} class="fa-brands fa-instagram"></i>
          <i  style={{ marginLeft: '3rem' }} class="fa-brands fa-facebook"></i>
          <i style={{ marginLeft: '3rem' }}class="fa-brands fa-twitter"></i>
          <i style={{ marginLeft: '3rem' }}class="fa-brands fa-github"></i>
        </div>

        
        </Col>


       </Row>
     </Container>


    </div>
  )
}

export default Footer