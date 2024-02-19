import React, { useState } from 'react'
import Categories from '../components/Categories'
import { Row,Col, } from 'react-bootstrap'
import Videos from '../components/Videos'
import Add from '../components/Add'
import { Link } from 'react-router-dom'


function Mainpage() {
  //state for state lifting
  const [addUpdate,setAddUpdate]=useState("")
  return (
    <div className='  w-100'>
        <Row className='w-100 container'>
            <Col  lg={6} md={6}>
            
             <h2  className='text-black ms-5 mt-5 '><span className='text-danger'>S</span>tart <span className='text-danger'>U</span>ploading <span className='text-danger'>V</span>ideos<span className='text-danger'> F</span>or <span className='text-danger' >F</span>ree</h2>
             <Link to={'/history'} className=' ms-5 mt-5 fs-2 pp fw-bolder'> <i class="fa-regular fa-clock fa-spin text-black"></i>   View Watch History</Link>
             <p className='ms-5 m-3 text-black fs-5 '>You can upload videos to Video Uploader in a few easy steps. Video Uploader makes it easy and quick to free upload your videos online without any hassle. </p>
             <Add updateData={setAddUpdate}></Add> 
             </Col>
            <Col >
            <img className='w-75 mt-5 ms-5' src="https://i.postimg.cc/B6QQKBY2/live-removebg-preview.png" alt="" />
             </Col>
        </Row>
        <Row className='w-100 container'>
            <Col >

            <Videos data={addUpdate}></Videos>
            </Col>
            <Col>
            <Categories></Categories>
            </Col>
        </Row>
    </div>
  )
}

export default Mainpage