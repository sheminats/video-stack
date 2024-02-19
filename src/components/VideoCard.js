import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, deleteVideosApi } from '../apiService/allApis';
import { format } from 'date-fns';


function VideoCard({video,deleteData}) {
const deleteVideo=async(e,id)=>{
  e.preventDefault()
 const result=await deleteVideosApi(id)
//  alert("video deleted")
deleteData(result.data)
}
const dragStart=(e,id)=>{
  //to store the dragged data
  e.dataTransfer.setData("cardId",id)
  console.log("dragging started.source code id is"+id);
}

//history store
//body data -title,time,videourl,id
const title=video?.title
const videoURL=video?.videoURL




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      //history store
      const title=video?.title
      const videoURL=video?.videoURL
      //time
      let time=format(new Date(),"dd-MM-yyyy, h:mm a")
      const reqBody={
        title,videoURL,time,id:""
      }
      // console.log(reqBody);
      await addHistoryApi(reqBody)
    }
  
  return (
    <div>
          <Card draggable onDragStart={(e)=>dragStart(e,video?.id)} className='mt-5 mb-5 ms-3 border  border-danger'bg='dark'style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} className='w-100' style={{height:'160px'}} variant="top" src={video?.coverImg} />
      <Card.Body>
        <Card.Title className='text-white '>
            <h5 className='text-center'>{video?.title}</h5>
            <div className='text-end'>
            <i onClick={(e)=>deleteVideo(e,video?.id)} class="fa-solid text-danger fa-trash"></i>
            </div>
            </Card.Title>
      </Card.Body>
    </Card>
    <Modal
    centered size='lg' 
     show={show} onHide={handleClose}>
        <Modal.Header className=' text-white border' closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='border'>
        <iframe width="100%" height="300px" src={video?.videoURL} title="സൂരജ്-ന്റെ വിജയകഥ.  5000 രൂപ Starting Salaryil നിന്നും 7 Digit CTC -യിലേക്ക്..  Success of Stories" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard