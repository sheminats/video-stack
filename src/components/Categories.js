import { Row } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCatApi, deleteCatApi, getCatApi, getVideo, updateCatApi, } from '../apiService/allApis';
import { Trash2 } from 'feather-icons-react/build/IconComponents';


function Categories() {

const [show, setShow] = useState(false);

const[categories,setCategories]=useState([])

const getCategories= async()=>{
  const result = await getCatApi()
  setCategories(result.data);
}
useEffect(()=>{
  getCategories()
},[])

// console.log(categories);

const handleClose = () => {
  setShow(false)
  setCatInputs({title:"",id:"",videos:[]})
};
const handleShow = () => setShow(true);


const[catInputs,setCatInputs]=useState({
  title:"",id:"",videos:[]})

console.log(catInputs);

const handleAdd= async(e)=>{
  e.preventDefault()
  if(!catInputs.title){
    alert("please fill all inputs")
  }
  else{
   const result=await addCatApi(catInputs)
   if(result.status>=200 && result.status<300){
    await getCategories()
    alert("category added")
    handleClose()
   }
  }
}

const handleDelete=async(e,id)=>{
  e.preventDefault()
  await deleteCatApi(id)
  await getCategories()
}
  
  const draggingOver=(e)=>{
    e.preventDefault()
    console.log("dragging over the category");
  }

  const dropped= async (e,id,)=>{
    console.log("dropped and cat Id"+id);
    const vidId=e.dataTransfer.getData("cardId")
    console.log("dragged data",vidId);

    //access video
    const result=await getVideo(vidId)
    const video=result.data

    //select cat
let selectedCat =categories.find(i=>i.id==id)
selectedCat.videos.push(video)
//  console.log (selectedCat);

 await updateCatApi(id,selectedCat)
 getCategories()
  }


  return (
    <Row>     
        <div className='mt-5 mb-5 text-center'>
        <button onClick={handleShow} style={{width:'300px', borderRadius:'7px', fontFamily:'Rufina'}}>Add Category</button>

    {
      categories?.length>0?
      categories?.map(i=>(
        <div droppable onDragOver={e=>draggingOver(e)} onDrop={(e)=>dropped(e,i?.id)} className='p-5 rounded border my-3 bg-dark'>
          <h5 className='text-center text-white'>{i?.title}</h5>

      <marquee>
          <div className='d-flex'>
            {i?.videos.length>0?(
              i.videos.map(j=>(
                <div style={{width:'100px'}}>
                  <img style={{height:'60px'}} className='w=100 px-2' src={j?.coverImg} alt="" />
                </div>
              ))
            ):""}
          </div>
      </marquee>


          <div className='text-end'>
            <Trash2 onClick={(e)=>handleDelete(e,i?.id)} size="45" className="text-danger btn"></Trash2>
          </div>
        </div>
       
      ))
      :
      <h1>No categories added</h1>
    }

    
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger fw-bolder'>Add New Category</Modal.Title>
        </Modal.Header>
        <FloatingLabel
       
        controlId="floatingInput"
        label="Category Name"
        className="mb-3 mt-4 p-2 container "
      >
        <Form.Control name="title" onChange={(e)=>setCatInputs({...catInputs,["title"]:e.target.value})}  type="text" placeholder="Category Name" />
      </FloatingLabel>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'black', color:'white', border:'none',fontFamily:'Rufina'}} onClick={(e)=>handleAdd(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
        <ToastContainer />

    </div>
    </Row>
  )
}

export default Categories


