import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido.',
  },
};

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error !== null) {
      isValid(target.value);
    }

    setValue(target.value);
  }

  function isValid(value) {
    if (type === false) {
      return true;
    }

    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  return {
    value,
    error,
    setValue,
    onChange,
    isValid: () => isValid(value),
    onBlur: () => isValid(value),
  };
}

export default useForm;
