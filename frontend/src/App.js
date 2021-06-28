import './App.css';
import { Form, Button, Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <h1 className='center'>Search Items</h1>
      <Form.Group>
        <Form.Control size='lg' type='text' placeholder='Search Item' />
      </Form.Group>
      <br />
      <Button type='button' class='primary-btn' >Fetch Items</Button>

      <section>

      </section>

    </Container>
  );
}

export default App;
