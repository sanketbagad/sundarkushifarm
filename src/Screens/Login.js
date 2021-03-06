import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container className='signContainer'>
            <h6 className='loginTitle'> We are happy you are back</h6>
            <Form className='loginForm'>
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
      If You Are Not A Member Please <Link to='/signup'>Sign Up</Link>
    </Form.Text>
  </Form.Group>
  <Button variant="dark" type="submit" >
    Submit
  </Button>
</Form>
        </Container>
    )
}

export default Login
