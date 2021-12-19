import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
             <Container className='signContainer'>
                 <h6 className='loginTitle'> We Are Glad You Are Joining Us</h6>
            <Form className='loginForm'>

            <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Text className="text-muted"> 
      If Already a Member Please <Link to='/'>Login</Link>
    </Form.Text>
  </Form.Group>
  <Button variant="dark" type="submit" >
    Submit
  </Button>
</Form>
        </Container>
        </div>
    )
}

export default SignUp
