import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Layout from 'components/Layout';
import useInput from 'util/useInput';
import { Step1Wrapper, Step1Header, Step1Form, Step1Footer } from 'styles/pages/step1';

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
      <Step1Wrapper>
        <Step1Header>
          <Link to="/">
            <img src="/images/Step1/GoBack.png" alt="Step1 GoBack Logo" />
          </Link>
          <div>
            <h1>STEP 1</h1>
            <img src="/images/Step1/FooterProgressBar.png" alt="Step1 Footer Progress Bar Logo" />
          </div>

          <p>내가 선택한 가치배지에서</p>
          <p>왼쪽 상단의 번호를 입력해 주세요</p>
        </Step1Header>

        <Step1Form onSubmit={onSubmitForm}>
          <div>
            <input type="number" id="num1" name="num1" placeholder="1" value={num1} onChange={onChangeNum1} />
            <input type="number" id="num2" name="num2" placeholder="2" value={num2} onChange={onChangeNum2} />
            <input type="number" id="num3" name="num3" placeholder="3" value={num3} onChange={onChangeNum3} />
          </div>

          <button type="submit">입력 완료</button>
        </Step1Form>

        <Step1Footer>
          <div />

          <div>
            <p>ⓒBLOOM COMPANY</p>
            <img src="/images/Step1/FooterLogo.png" alt="Step1 Footer Logo" />
          </div>
        </Step1Footer>
      </Step1Wrapper>
    </Layout>
  );
};

export default Step1;
