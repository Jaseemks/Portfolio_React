import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mern from '../assets/mern.jpg';
import support from '../assets/support.jpeg';
import './Content.css';

const ContentStyle = {
  background: 'linear-gradient(to right, #fafc94, #e54c22)',
  border: '1px solid rgb(57, 113, 81)', // Adjust border color as needed
  borderRadius: '0px', // Adjust border radius as needed
}


export const Content = () => {
  return (
   <>
    <form className='cards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mern} />
      <Card.Body>
        <Card.Title>Full Stack Webdeveloper</Card.Title>
        <Card.Text>
        As a full-stack web developer proficient in the MERN stack, I'm equipped to handle both front-end and back-end development tasks using MongoDB, Express.js, React, and Node.js. This means i can seamlessly work with databases, build robust server-side logic, and create interactive user interfaces. My skills encompass handling data flow, API integrations, user authentication, and responsive design, making you adept at developing scalable and dynamic web applications.
        </Card.Text>
        {/* <Button variant="primary">G</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={support} />
      <Card.Body>
        <Card.Title>Technical Support</Card.Title>
        <Card.Text>
        As a technical support engineer, I'm skilled in analyzing technical issues, identifying root causes, and implementing effective solutions. I excel in diagnosing and troubleshooting problems, offering solutions, and ensuring smooth operations for end-users. My expertise includes:
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </form>
  );
   </>
  )
}
