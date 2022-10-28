import React from 'react';
import '../Styles/Link.css';

const Input = ({ id, label, type, value, setState, index, ...props }) => {
  const handleChange = () => {
    if (!value[index]) {
      setState([...value, id]);
    } else {
      const filtered = value.filter((v) => v !== value[index]);
      setState([...filtered, id]);
    }
  };

  return (
    <>
      <label htmlFor={id} style={{ fontFamily: 'monospace' }}>
        <input
          id={id}
          type={type}
          checked={value[index] === id}
          onChange={handleChange}
          {...props}
        />
        <span>{' ' + id}</span>
      </label>
    </>
  );
};

export default Input;
