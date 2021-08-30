import React, {useState} from 'react';
import Login from '../loginComponent/login';

const Home = () => {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const [data, setData] = useState({
    concepto: '',
    monto: '',
    fecha: '',
    tipo: '',
    category_id: ''
  });

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
