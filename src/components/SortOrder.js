import { useDispatch, useSelector } from 'react-redux';
import { sortBooks } from '../store/actions';
import Form from 'react-bootstrap/Form';

export const SortOrder = () => {

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleSort = (order) => {
    dispatch(sortBooks(order))
    console.log(books)
  };

  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>
          Sort order
          </Form.Label>
          <Form.Select onChange={(e) => handleSort(e.target.value)}>     
          <option value="ascending">By title ascending</option>
          <option value="descending">By title descending</option>
          <option value="inOrderAdded">By order added</option>
            </Form.Select>
        </Form.Group>
      </Form>
  )
}
