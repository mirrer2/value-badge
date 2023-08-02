import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from 'components/Layout';
import useInput from 'util/useInput';
import { StepWrapper, StepHeader, StepForm, StepFooter } from 'styles/pages/step';

const Step = () => {
  const [num1, onChangeNum1] = useInput('');
  const [num2, onChangeNum2] = useInput('');
  const [num3, onChangeNum3] = useInput('');

  const [text1, onChangeText1] = useInput('');
  const [text2, onChangeText2] = useInput('');
  const [text3, onChangeText3] = useInput('');

  const [isNumInputs, setIsNumInputs] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  const onSubmitStep1Form = useCallback(
    e => {
      e.preventDefault();
      if (isNumInputs) setShowBadge(true);
    },
    [isNumInputs],
  );

  const getImagePath = useCallback(num => {
    return `/images/Badge/${num}.png`;
  }, []);

  const onSubmitStep2Form = useCallback(
    e => {
      e.preventDefault();
      console.log(text1, text2, text3);
    },
    [text1, text2, text3],
  );

  useEffect(() => {
    setIsNumInputs(num1 !== '' && num2 !== '' && num3 !== '');
  }, [num1, num2, num3]);

  return (
    <Layout>
      <StepWrapper>
        <StepHeader>
          <Link to="/">
            <img src="/images/Step/GoBack.png" alt="Step1 GoBack Logo" />
          </Link>

          {showBadge ? (
            <>
              <div>
                <h1>STEP 2</h1>
                <img src="/images/Step/Step2ProgressBar.png" alt="Step2 Progress Bar Logo" />
              </div>

              <p>내가 생각한 가치의 의미를</p>
              <p>키워드로 작성해주세요.</p>
            </>
          ) : (
            <>
              <div>
                <h1>STEP 1</h1>
                <img src="/images/Step/Step1ProgressBar.png" alt="Step1 Progress Bar Logo" />
              </div>

              <p>내가 선택한 가치배지에서</p>
              <p>왼쪽 상단의 번호를 입력해 주세요</p>
            </>
          )}
        </StepHeader>

        {showBadge ? (
          <StepForm onSubmit={onSubmitStep2Form}>
            <div>
              <div>
                <img src={getImagePath(num1)} alt={`Step2 Badge ${num1}`} />
                <input
                  type="text"
                  id="text1"
                  name="text1"
                  placeholder="입력하기"
                  maxLength={7}
                  value={text1}
                  onChange={onChangeText1}
                />
              </div>

              <div>
                <img src={getImagePath(num2)} alt={`Step2 Badge ${num2}`} />
                <input
                  type="text"
                  id="text2"
                  name="text2"
                  placeholder="입력하기"
                  maxLength={7}
                  value={text2}
                  onChange={onChangeText2}
                />
              </div>

              <div>
                <img src={getImagePath(num3)} alt={`Step2 Badge ${num3}`} />
                <input
                  type="text"
                  id="text3"
                  name="text3"
                  placeholder="입력하기"
                  maxLength={7}
                  value={text3}
                  onChange={onChangeText3}
                />
              </div>
            </div>

            <button type="submit">작성 완료</button>
          </StepForm>
        ) : (
          <StepForm onSubmit={onSubmitStep1Form}>
            <div>
              <input type="number" id="num1" name="num1" placeholder="1" value={num1} onChange={onChangeNum1} />
              <input type="number" id="num2" name="num2" placeholder="2" value={num2} onChange={onChangeNum2} />
              <input type="number" id="num3" name="num3" placeholder="3" value={num3} onChange={onChangeNum3} />
            </div>

            <button type="submit">입력 완료</button>
          </StepForm>
        )}

        <StepFooter>
          <div />

          <div>
            <p>ⓒBLOOM COMPANY</p>
            <img src="/images/Step1/FooterLogo.png" alt="Step1 Footer Logo" />
          </div>
        </StepFooter>
      </StepWrapper>
    </Layout>
  );
};

export default Step;
