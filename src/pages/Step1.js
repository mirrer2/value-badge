import React, { useCallback } from 'react';

import Layout from 'components/Layout';
import useInput from 'util/useInput';

const Step1 = () => {
  const [num1, onChangeNum1] = useInput('');
  const [num2, onChangeNum2] = useInput('');
  const [num3, onChangeNum3] = useInput('');

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log(num1, num2, num3);
    },
    [num1, num2, num3],
  );

  return (
    <Layout>
      <header>
        <div>
          <h1>STEP 1</h1>
          <div />
        </div>

        <p>내가 선택한 가치배지에서 왼쪽 상단의 번호를 입력해 주세요</p>
      </header>

      <form onSubmit={onSubmitForm}>
        <input type="number" id="num1" name="num1" value={num1} onChange={onChangeNum1} />
        <input type="number" id="num2" name="num2" value={num2} onChange={onChangeNum2} />
        <input type="number" id="num3" name="num3" value={num3} onChange={onChangeNum3} />

        <button type="submit">입력 완료</button>
      </form>

      <footer>
        <div />

        <div>
          <p>ⓒBLOOM COMPANY</p>
          <img src="/images/Step1/FooterLogo.png" alt="Step1 Footer Logo" />
        </div>
      </footer>
    </Layout>
  );
};

export default Step1;
