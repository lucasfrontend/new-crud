import React from 'react';
import { useSelector } from 'react-redux';
import  ToggleBtn  from './ToggleBtn';


export const Header = () => {

  const user = useSelector((state) => state.user)

  return (
    <header>
      <ToggleBtn value="light" />
      <h1>Mi Aplicación</h1>
      <nav>
        <ul>
          <li><a href="#">name: {user.name}</a></li>
          <li><a href="#">correo: {user.email}</a></li>
          <li><a href="#">username: {user.username}</a></li>
        </ul>
      </nav>
    </header>
  );
}
