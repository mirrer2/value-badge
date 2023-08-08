import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { Helmet } from 'react-helmet';
import html2canvas from 'html2canvas';

import Layout from 'components/Layout';
import useInput from 'util/useInput';
import {
  StepWrapper,
  StepHeader,
  StepForm,
  StepFormInput,
  StepFormTextarea,
  StepFooter,
  ResultImageWrapper,
  ResultHeader,
  ResultImageHeader,
  ResultImage,
  ResultFooter,
  ResultBtn,
} from 'styles/pages/step';

const Step = () => {
  const [num1, onChangeNum1] = useInput('', 'num1');
  const [num2, onChangeNum2] = useInput('', 'num2');
  const [num3, onChangeNum3] = useInput('', 'num3');

  const [text1, onChangeText1] = useInput('', 'text1');
  const [text2, onChangeText2] = useInput('', 'text2');
  const [text3, onChangeText3] = useInput('', 'text3');

  const [isNumInputs, setIsNumInputs] = useState(false);
  const [isTextInputs, setIsTextInputs] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCombinedImage, setShowCombinedImage] = useState(false);
  const [combinedImageSrc, setCombinedImageSrc] = useState('');

  const shareImageRef = useRef(null);
  const stepHeaderRef = useRef(null);
  const textareaRef1 = useRef(null);
  const textareaRef2 = useRef(null);
  const textareaRef3 = useRef(null);
  const navigate = useNavigate();

  const onClickGoBackBtn = useCallback(() => {
    if (showResult) {
      setShowResult(false);
      setShowBadge(true);
      setShowCombinedImage(false);
    } else if (showBadge) {
      setShowBadge(false);
    } else {
      navigate('/');
    }
  }, [showBadge, showResult, navigate]);

  const getImagePath = useCallback(num => {
    return `/images/Badge/${num}.png`;
  }, []);

  const onSubmitStep1Form = useCallback(
    e => {
      e.preventDefault();
      if (isNumInputs) setShowBadge(true);

      if (stepHeaderRef.current) {
        stepHeaderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [isNumInputs],
  );

  const onSubmitStep2Form = useCallback(
    e => {
      e.preventDefault();

      if (isTextInputs) {
        setShowBadge(false);
        setShowResult(true);
      }

      console.log('폼222 실행!!');

      if (!shareImageRef.current) return;

      if (stepHeaderRef.current) {
        stepHeaderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [isTextInputs],
  );

  const onSharedImage = useCallback(async () => {
    try {
      const response = await fetch(combinedImageSrc);
      const blob = await response.blob();
      const file = new File([blob], 'value_badge_image.png', { type: blob.type });

      if (navigator.share) {
        const shareData = {
          files: [file],
        };
        await navigator.share(shareData);
      } else {
        saveAs(combinedImageSrc, 'value_badge_image.png');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error sharing image:', error);
      } else {
        console.error('Error sharing image:', error);
      }
    }
  }, [combinedImageSrc]);

  const handleResizeHeight = useCallback(textareaRef => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }, []);

  useEffect(() => {
    const adjustTextareaHeight = (textareaRef, text) => {
      if (textareaRef.current && text) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      }
    };

    adjustTextareaHeight(textareaRef1, text1);
    adjustTextareaHeight(textareaRef2, text2);
    adjustTextareaHeight(textareaRef3, text3);
  }, [showBadge, text1, text2, text3]);

  useEffect(() => {
    const combineImage = async () => {
      if (showResult) {
        if (!shareImageRef.current) return;
        console.log('이미지 결합 시도');

        try {
          const image = shareImageRef.current;
          const canvas = await html2canvas(image, { scale: 2 });

          canvas.toBlob(blob => {
            if (blob !== null) {
              setCombinedImageSrc(URL.createObjectURL(blob));
              setShowCombinedImage(true);
            }
          });
        } catch (error) {
          console.error('Error converting div to image:', error);
        }
      }
    };

    combineImage();
  }, [showResult, showBadge, num1, num2, num3, text1, text2, text3]);

  useEffect(() => {
    setIsNumInputs(num1 !== '' && num2 !== '' && num3 !== '');
  }, [num1, num2, num3]);

  useEffect(() => {
    setIsTextInputs(text1 !== '' && text2 !== '' && text3 !== '');
  }, [text1, text2, text3]);

  useEffect(() => {
    console.log(combinedImageSrc);
  }, [combinedImageSrc]);

  return (
    <Layout>
      <Helmet>
        <title>Value Badge | Steps</title>
        <meta name="theme-color" content="#FCFCFC" />
      </Helmet>

      <StepWrapper>
        <StepHeader $showResult={showResult} ref={stepHeaderRef}>
          <button onClick={onClickGoBackBtn}>
            <img src="/images/Step/GoBack.png" alt="Step1 GoBack Logo" />
          </button>

          {showBadge ? (
            <>
              <div>
                <h1>STEP 2</h1>
                <img src="/images/Step/Step2ProgressBar.png" alt="Step2 Progress Bar Logo" />
              </div>

              <p>내가 생각한 가치의 의미를</p>
              <p>키워드로 작성해주세요.</p>
            </>
          ) : showResult ? (
            <ResultHeader>
              <div>
                <h1>STEP 3</h1>
                <img src="/images/Result/ResultProgressBar.png" alt="Step1 Progress Bar Logo" />
              </div>

              <div>💡 이미지를 꾹 누르면 사진 앱에 저장할 수 있어요</div>
            </ResultHeader>
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
          <StepForm onSubmit={onSubmitStep2Form} $isTextInputs={isTextInputs}>
            <div>
              <div>
                <img src={getImagePath(num1)} alt={`Step2 Badge ${num1}`} />
                <StepFormTextarea
                  rows={1}
                  ref={textareaRef1}
                  type="text"
                  id="text1"
                  name="text1"
                  placeholder="입력하기"
                  value={text1}
                  onChange={e => {
                    onChangeText1(e);
                    handleResizeHeight(textareaRef1);
                  }}
                />
              </div>

              <div>
                <img src={getImagePath(num2)} alt={`Step2 Badge ${num2}`} />
                <StepFormTextarea
                  rows={1}
                  ref={textareaRef2}
                  type="text"
                  id="text2"
                  name="text2"
                  placeholder="입력하기"
                  value={text2}
                  onChange={e => {
                    onChangeText2(e);
                    handleResizeHeight(textareaRef2);
                  }}
                />
              </div>

              <div>
                <img src={getImagePath(num3)} alt={`Step2 Badge ${num3}`} />
                <StepFormTextarea
                  rows={1}
                  ref={textareaRef3}
                  type="text"
                  id="text3"
                  name="text3"
                  placeholder="입력하기"
                  value={text3}
                  onChange={e => {
                    onChangeText3(e);
                    handleResizeHeight(textareaRef3);
                  }}
                />
              </div>
            </div>

            <button type="submit">작성 완료</button>
          </StepForm>
        ) : showResult ? (
          <>
            {showCombinedImage ? (
              <ResultImageWrapper>
                <img src={combinedImageSrc} alt="Combined Result" />
              </ResultImageWrapper>
            ) : (
              <ResultImageWrapper ref={shareImageRef}>
                <ResultImageHeader>My Value</ResultImageHeader>

                <ResultImage>
                  <div>
                    <div>
                      <img src={getImagePath(num1)} alt={`Result Badge ${num1}`} />
                      <div>
                        <p>{text1}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <img src={getImagePath(num2)} alt={`Result Badge ${num2}`} />
                      <div>
                        <p>{text2}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <img src={getImagePath(num3)} alt={`Result Badge ${num3}`} />
                      <div>
                        <p>{text3}</p>
                      </div>
                    </div>
                  </div>
                </ResultImage>

                <ResultFooter>
                  <p>ⓒBLOOM COMPANY</p>
                  <img src="/images/Step/FooterLogo.png" alt="Step Footer Logo" />
                </ResultFooter>
              </ResultImageWrapper>
            )}

            <ResultBtn>
              <button type="button" onClick={onSharedImage}>
                공유하기
              </button>
            </ResultBtn>
          </>
        ) : (
          <StepForm onSubmit={onSubmitStep1Form} $isNumInputs={isNumInputs}>
            <div>
              <StepFormInput
                type="number"
                id="num1"
                name="num1"
                placeholder="1"
                value={num1}
                onChange={onChangeNum1}
                inputMode="numeric"
              />
              <StepFormInput
                type="number"
                id="num2"
                name="num2"
                placeholder="2"
                value={num2}
                onChange={onChangeNum2}
                inputMode="numeric"
              />
              <StepFormInput
                type="number"
                id="num3"
                name="num3"
                placeholder="3"
                value={num3}
                onChange={onChangeNum3}
                inputMode="numeric"
              />
            </div>

            <button type="submit">입력 완료</button>
          </StepForm>
        )}

        <StepFooter>
          <div />

          <div>
            <p>ⓒBLOOM COMPANY</p>
            <img src="/images/Step/FooterLogo.png" alt="Step Footer Logo" />
          </div>
        </StepFooter>
      </StepWrapper>
    </Layout>
  );
};

export default Step;
