import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';
import { Header } from './components/Header';
import { Email } from './components/Email';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      holi
      <Email />
    </>
  );
}

export default App;
