import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { getVideoApi } from '../apiService/allApis'
import {Row,Col} from 'react-bootstrap'

function Videos({data}) {

  const [allVideos,setAllVideos]=useState([])


  const[deleteUpdate,setDeleteUpdate]=useState({})
 


const accessAllVideos=async()=>{
  const result= await getVideoApi()
  // console.log(result.data);
  setAllVideos(result.data);
  }
  useEffect(()=>{
    accessAllVideos()
  },[data,deleteUpdate])
  // console.log(allVideos);
  return (
    <Row className='w-100 container'>
      {
        allVideos?.length>0?
        allVideos?.map(i=>(
          <Col className='my-3 'lg={6} md={6}>
          <VideoCard deleteData={setDeleteUpdate} video={i}></VideoCard>
          </Col>
        ))
        :<h1 className='text-white ms-5 fs-3 mt-5'>No Videos Added Yet! Add New Video</h1>
      }
</Row>
  )
}

export default Videos