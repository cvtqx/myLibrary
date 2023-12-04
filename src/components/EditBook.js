import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Form, Col } from 'react-bootstrap';
import { updateBook } from '../store/actions';

export const EditBook = ({ bookId, handleCancelClick }) => {
  const dispatch = useDispatch();

  const bookDetails = useSelector((state) => state.books.find((book) => book.id === bookId));


  const [editedBook, setEditedBook] = useState(bookDetails || {});
  const { title, description, author, published, OLID } = editedBook;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }))
  };


  const handleSaveClick = () => {
    dispatch(updateBook(editedBook));
    handleCancelClick();
  };

  return (
      <Form>
          <h1>EDIT BOOK</h1>
      <Form.Group as={Row} className="mb-3" controlId="OLID">
        <Form.Label column sm="2">
          ID
        </Form.Label>
        <Col sm="8">
          <Form.Control plaintext readOnly defaultValue={OLID}  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Title:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" value={title} name="title" onChange={handleInputChange} />
        </Col>
      </Form.Group>

       <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Author:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" value={author} name="author" onChange={handleInputChange}/>
        </Col>
      </Form.Group>

       <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Published:
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" value={published} name="published" onChange={handleInputChange}/>
        </Col>
      </Form.Group>

       <Form.Group  className="mb-3">
        <Form.Label column sm="4">
          Description:
        </Form.Label>
        <Col sm="12">
          <Form.Control as="textarea" rows={3} value={description} name="description" onChange={handleInputChange}/>
        </Col>
      </Form.Group>
      <Button variant="outline-secondary" className="save-button" onClick={handleSaveClick}>Save</Button>{' '}
      <Button variant="outline-secondary" className="cancel-button" onClick={handleCancelClick}>Cancel</Button>{' '}
    </Form>
  )
}
