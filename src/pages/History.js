import { Trash } from 'feather-icons-react/build/IconComponents';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteHistoryApi, getHistoriesApi } from '../apiService/allApis';

function History() {


  const [history,setHistory]=useState([])
  const getHistories=async()=>{
    const result=await getHistoriesApi()
    setHistory(result.data)
  }

const deleteHistory=async(e,id)=>{
  e.preventDefault()
 await deleteHistoryApi(id)
 getHistories()
}


  useEffect(()=>{
getHistories()
  },[])
  // console.log(history);
  return (
    <div className=' container'>
        <h1 className='text-center text-danger mt-5'>Watch History</h1>
        <hr />

         <Table className='  mb-5' striped bordered hover variant="light">
      <thead className='text-center'>
        <tr >
          <th className='text-danger '>#</th>
          <th className='text-danger'>Title</th>
          <th className='text-danger'>Time</th>
          <th className='text-danger'>Video url</th>
          <th className='text-danger'>Delete</th>
        </tr>
      </thead>
      <tbody className='text-center '>
      {
          history.length>0?(
history.map((i,index)=>
  <tr>
  <td>{index+1}</td>
  <td>{i.title}</td>
  <td>{i.time}</td>
  <td className='pb-5'>{i.videoURL}</td>
  <td className='text-center'>
    <Trash onClick={(e)=>deleteHistory(e,i.id)} size='45' className='btn text-danger'></Trash>
    </td>
</tr>

  )
          ):
          <h1>No Histories..</h1>
        }

      </tbody>
    </Table>
 

    </div>
  )
}

export default History