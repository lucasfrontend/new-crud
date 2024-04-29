import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../redux/themeSlice';

const ToggleBtn = ({ value }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    console.log("handleToggle", value)
    dispatch(setTheme(value));
  };

  return (
    <button onClick={handleToggle}>
      Toggle Theme ess: {value}
    </button>
  );
};

export default ToggleBtn;
