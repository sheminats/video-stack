import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <div >
      
        <Row className='w-100 container'>
        <Col lg={6} md={6} className="p-5">
            <h1 className='mt-3 pt-5 text-black'><span style={{color:"red"}}>V</span>ideo <span style={{color:"red"}}>U</span>ploader</h1>
        <p className='text-black fs-5 '>Simplified makes it easy and quick to free upload your videos online without any hassle. Get started right now - it's free! Instantly upload your videos in Video Uploader</p>
        <Link to={'/main'}>
        <Button variant='outline-dark' className='mt-3' ><span className='text-danger fw-bolder'>Get Started</span>  <i class="fa-solid fa-play fa-beat-fade" style={{color:" #922020;"}}></i></Button>{' '}
        </Link>
        </Col>
        <Col lg={6} md={6} className="p-5 my-5">
            <img className=' img-fluid' src="https://i.postimg.cc/52gWRWz3/video.gif" alt="" />

        </Col>
       

        </Row>

   <Container className='p-5'>
        <h1 className='text-center '  style={{color:"red"}}>Features</h1>
        <hr />
        <Row className='w-100 container'>



<Col >
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src='https://i.postimg.cc/J0T0n2Qw/play-pause.gif' />
<Card.Body className='bg-black text-white'>
<Card.Title className='p-3 text-center' >Managing Videos</Card.Title> 
<Card.Text className='p-3'  >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, porro. Dolores, eligendi quam asperiores autem temporibus
</Card.Text>    
</Card.Body>
</Card>
</Col>


<Col>
<Card style={{ width: '18rem' }}>
<Card.Img style={{height:"210px"}} variant="top" src='https://i.postimg.cc/Hxs5YRGm/circle.gif' />
<Card.Body className='bg-black text-white'>
<Card.Title className='p-3 text-center' > Categorise Videos</Card.Title> 

<Card.Text className='p-3' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, porro. Dolores, eligendi quam asperiores autem temporibus
</Card.Text>
</Card.Body>
</Card>
</Col>



<Col>
<Card style={{ width: '18rem' }}>
<Card.Img  style={{height:"190px"}} variant="top" src='https://i.postimg.cc/7ZZpz1FN/beat.gif' />
<Card.Body className='bg-black text-white'>
<Card.Title className='p-3 text-center'>Watch History</Card.Title> 
<Card.Text className='p-3'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, porro. Dolores, eligendi quam asperiores autem temporibus Laborum itaque numquam 
</Card.Text>
</Card.Body>
</Card>

</Col>



</Row>

<hr />
      </Container>
     
      
    </div>
   
  )
}

export default Home