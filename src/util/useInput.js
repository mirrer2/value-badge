import { useEffect, useState } from 'react';

const useInput = (initialValue, inputName) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false); // 오류 여부를 불리언 값으로 저장

  useEffect(() => {
    const storedValue = window.localStorage.getItem('stepFormData');
    if (storedValue) {
      const formData = JSON.parse(storedValue);
      const inputInfo = formData[inputName] || {};
      setValue(inputInfo.value || initialValue);
      setError(inputInfo.error || false); // 로컬 스토리지에서 오류 여부 불리언 값 불러오기
    }
  }, [inputName, initialValue]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(false); // 입력 값이 변경되면 오류 여부 초기화

    const isValid = isValidNumber(newValue); // 유효성 검사 수행
    setError(!isValid); // 유효성 검사 결과에 따라 오류 여부 설정

    const storedValue = window.localStorage.getItem('stepFormData');
    const formData = storedValue ? JSON.parse(storedValue) : {};
    formData[inputName] = {
      value: newValue,
      error: !isValid, // 오류 여부 저장
    };
    window.localStorage.setItem('stepFormData', JSON.stringify(formData));
  };

  const isValidNumber = num => {
    const parsedNum = parseInt(num);
    return !isNaN(parsedNum) && parsedNum >= 1 && parsedNum <= 54;
  };

  return [value, handleChange, setValue, error]; // 오류 여부 반환 추가
};

export default useInput;
