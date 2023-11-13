import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const AddBook = ({inputID, addButtonHandler, inputIDChangeHandler}) => {
  

 

  return (
    <Form>
      <Form.Group className='mb-3' controlId="addBook.ControlInput">
        <Form.Label> Add a book by Open Library ID Number</Form.Label>
        <InputGroup className='mb-3'>
          <Form.Control
          placeholder="Book ID Number"
          aria-label="Book ID Number"
          aria-describedby="basic-addon2"
          value={inputID}
          onChange={inputIDChangeHandler}></Form.Control>
          <Button
            className="btn btn-secondary" 
            type="button"
            onClick={addButtonHandler}>
          Add
        </Button>
        </InputGroup>
      </Form.Group>
    </Form>
 
  )
}
