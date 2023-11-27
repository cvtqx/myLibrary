import Form from 'react-bootstrap/Form';

export const SortOrder = () => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>
          Sort order
          </Form.Label>
          <Form.Select>     
          <option value="ascending">By title ascending</option>
          <option value="descending">By title descending</option>
          <option value="inOrderAdded">By order added</option>
            </Form.Select>
        </Form.Group>
      </Form>
  )
}
