import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../apiService/allApis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


function Add({updateData}) {
  //state to store input datas(add id too)
  const [inputDatas,setInputDatas]=useState({
    title:"",coverImg:"",videoURL:"",id:""
  }

  )


  //function to update input state
  const setData=(e)=>{
  //  let value= e.target.value;
  //   let name=e.target.name;
//short form
let {value,name}=e.target
//update state with existing datas
setInputDatas({...inputDatas,[name]:value})
  }
  
  //extract url
  const extractUrl=(e)=>{
const {value,name}=e.target
 let urlCode=value.slice(-11,)
 //"https://www.youtube.com/embed/MvBqEB_Oz2g?autoplay=1"
 const finalURl=`https://www.youtube.com/embed/${urlCode}?autoplay=1`
 setInputDatas({...inputDatas,[name]:finalURl})


  }
  console.log(inputDatas);


  const [show, setShow] = useState(false);
  const handleClose = () => {
  setShow(false);
  //reset state
  setInputDatas({...inputDatas, title:"",coverImg:"",videoURL:"",id:""
})
  }
  const handleShow = () => setShow(true);

  //add video
  const handleAdd=async(e)=>{
    //prevent the event
    e.preventDefault()

const{title,coverImg,videoURL}=inputDatas
if(!title || !coverImg ||!videoURL){
  toast.error("Please fill all datas", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}


else{
  const result =await addVideoApi(inputDatas)
  if(result.status>=200 && result.status<300){
    updateData(result.data)
    toast.success('Video added Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    handleClose()
  }
}


  }

 
  return (
    <div className='mt-5 modal-content w-50 bg-light' >
        <h1 className='ms-5'><i class="fa-solid fa-upload fa-fade"onClick={handleShow} style={{color:"#c1750b"}}></i></h1>
        <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='bg-black' closeButton>
          <Modal.Title className='text-light gg '>Upload Video</Modal.Title>
        </Modal.Header>
        <div className='bg-black mt-3 '>
      <Form.Floating className="mb-3 bg-black container">
        <Form.Control name='title' onChange={(e)=>setData(e)}
          id="floatingInputCustom"
          type="text"
          placeholder="Video Caption"
        />
        <label  htmlFor="floatingInputCustom"className='ms-2 '>Video Caption </label>
      </Form.Floating>
      <Form.Floating className="mb-3 bg-black container" >
        <Form.Control name='coverImg' onChange={(e)=>setData(e)}
     
          id="floatingPasswordCustom"
          type="text"
          placeholder="Cover Image URL"
        />
        <label htmlFor="floatingPasswordCustom"className='ms-2'>Cover Image URL</label>
      </Form.Floating>
      <Form.Floating className="mb-3 bg-black container ">
        <Form.Control name='videoURL' onChange={(e)=>extractUrl(e)}
          id="floatingPasswordCustom"
          type="url"
          placeholder="Youtube Video URL"
        />
        <label  htmlFor="floatingPasswordCustom" className='ms-2 '>Youtube Video URL</label>
      </Form.Floating>

      </div>
        <Modal.Footer className='bg-black border-bottom'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="light" onClick={(e)=>handleAdd(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add