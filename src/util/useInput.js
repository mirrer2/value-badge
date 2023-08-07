import { useEffect, useState } from 'react';

const useInput = (initialValue, inputName) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = window.localStorage.getItem('stepFormData');
    if (storedValue) {
      const formData = JSON.parse(storedValue);
      setValue(formData[inputName] || initialValue);
    }
  }, [inputName, initialValue]);

  const handleChange = e => {
    const storedValue = window.localStorage.getItem('stepFormData');
    const formData = storedValue ? JSON.parse(storedValue) : {};
    formData[inputName] = e.target.value;
    window.localStorage.setItem('stepFormData', JSON.stringify(formData));

    setValue(e.target.value);
  };

  return [value, handleChange, setValue];
};

export default useInput;
