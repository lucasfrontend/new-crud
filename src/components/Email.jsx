import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../redux/userSlice';

export const Email = () => {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email)

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value))
  }

  return (
    <>
      <h1>email</h1>
      <input type="email" value={email} placeholder='Correo' onChange={handleChange}/>
    </>
  );
}
