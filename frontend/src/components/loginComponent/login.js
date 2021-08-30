import React, {useState} from 'react';
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Container
} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import loginPost from '../../services/login';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginPost(data);

    if (response.token) {
      setRedirect(true);
    } else {
      console.log('Not found');
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/home" />;
    }
  };

  return (
    <div>
      {renderRedirect()}

      <h1>Login</h1>

      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              className="mb-3 w-25"
              onChange={handleChange}
              name="email"
            ></FormControl>
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
              className="mb-3 w-25"
              onChange={handleChange}
              name="password"
            ></FormControl>
          </FormGroup>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
