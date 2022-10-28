import React from 'react';
import '../Styles/Link.css';

const Input = ({ id, label, type, value, setState, index, ...props }) => {
  const handleChange = () => {
    if (!value[index]) {
      setState([...value, label]);
    } else {
      const filtered = value.filter((v) => v !== value[index]);
      setState([...filtered, label]);
    }
  };

  return (
    <>
      <label htmlFor={id} style={{ fontFamily: 'monospace' }}>
        <input
          id={id}
          type={type}
          checked={value[index] === label}
          onChange={handleChange}
          {...props}
        />
        <span>{' ' + label}</span>
      </label>
    </>
  );
};

export default Input;
