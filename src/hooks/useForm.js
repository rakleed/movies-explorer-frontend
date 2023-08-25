import React from 'react';

function useForm(inputValues= {}) {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  return { values, handleChange, setValues };
}

export { useForm };
