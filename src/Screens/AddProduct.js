import React from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'
import BasicDatePicker from '../Components/DatePicker'

const AddProduct = () => {
    return (
        <div className='productAdmin'>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" placeholder="Price" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridName">
    <Form.Label>Taken From</Form.Label>
    <Form.Control placeholder="Name of Vendorer" type="text" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    {/* <Form.Label>Date</Form.Label> */}
    {/* <Form.Control placeholder="Enter the Date"  /> */}
    <BasicDatePicker />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Have Been Paid</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Payment Method</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
  </Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default AddProduct
